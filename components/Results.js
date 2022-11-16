const ThumbnailPopular = ({ result }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="cursor-pointer w-[500px] h-[300px] relative">
      <img
        layout="responsive"
        loading="lazy"
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        className="rounded-xl h-[300px] w-[500px] "
      />
      <div className="flex flex-row items-center">
        <h1>{result.original_title}</h1>
        <h4>{result.vote_average} ⭐️</h4>
      </div>
    </div>
  );
};

const ThumbnailResults = ({ result }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="cursor-pointer w-[270px] h-[150px]">
      <img
        layout="responsive"
        loading="lazy"
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        className="rounded-xl h-[150px] w-[250px]"
      />
    </div>
  );
};

const Results = ({ results, popular, top }) => {
  return (
    <div className="container mx-auto w-2/3">
      <div className="bg-darkblue h-screen w-full py-16 px-5">
        <h2>Discovers</h2>
        <div className="px-5 my-10 grid grid-flow-col  gap-5 overflow-x-auto scrollbar-hide mb-16">
          {popular.map((result) => (
            <ThumbnailPopular key={result.id} result={result} />
          ))}
        </div>

        <h2>Popular Movies</h2>
        <div className="px-5 my-10 grid grid-flow-col gap-0 overflow-x-auto scrollbar-hide">
          {top.map((result) => (
            <ThumbnailResults key={result.id} result={result} />
          ))}
        </div>

        <h2>Searches</h2>
        <div className="px-5 my-10 grid grid-flow-col  gap-0 overflow-x-auto scrollbar-hide">
          {results.map((result) => (
            <div key={result.id}>
              <ThumbnailResults result={result} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;
