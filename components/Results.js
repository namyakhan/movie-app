const Thumbnail = ({ result }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="p-2 cursor-pointer w-[200px] h-[120px]">
      <img
        layout="responsive"
        loading="lazy"
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        className="rounded-xl h-[100px] w-[500px]"
      />
    </div>
  );
};

const Results = ({ results }) => {
  return (
    <div className="container mx-auto w-2/3">
      {" "}
      <div className="bg-darkblue h-screen w-full ">
        <h2>Discover</h2>

        <div className="px-5 my-10 grid grid-flow-col  gap-4 overflow-x-auto scrollbar-hide">
          {results.map((result) => (
            <Thumbnail key={result.id} result={result} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;
