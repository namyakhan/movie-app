import Head from "next/head";
import Nav from "../components/Nav";
import Results from "../components/Results";
import SideNav from "../components/SideNav";
import requests from "../utils/requests";

export default function Home({ results }) {
  console.log(results);
  return (
    <div>
      <Head>
        <title>Movie App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-row h-screen ">
        <SideNav />
        <Results results={results} />
        <Nav />
      </div>
    </div>
  );
}

// Server side render
export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
