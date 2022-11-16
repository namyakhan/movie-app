import React, { useState } from "react";
import requests from "../utils/requests";
import { PopularActor, PopularMovie } from "../utils/data";
import { useRouter } from "next/router";
import { MapPinIcon, BellAlertIcon } from "@heroicons/react/24/outline";

const Nav = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <nav className="hidden lg:block bg-navy w-[500px] h-screen p-6">
      <div className="mt-10  flex flex-row items-center  justify-between ">
        <div className="flex flex-row items-center space-x-2 cursor-pointer">
          <img
            layout="responsive"
            loading="lazy"
            src="/admin.jpg"
            className="w-10 rounded-full"
          />
          <p>Namya</p>
        </div>
        <div className="flex flex-row items-center space-x-5 cursor-pointer">
          <MapPinIcon className="h-6 text-white" />
          <BellAlertIcon className="h-6 text-white" />
        </div>
      </div>

      {/* Search Filter */}
      <div className="flex flex-col ">
        <input
          type="text"
          placeholder="Search"
          onChange={handleChange}
          className="bg-gray-600 rounded-lg mt-10 p-2 text-white"
        />
        <div className={`grid grid-cols-2 gap-5 mt-5`}>
          {Object.entries(requests)
            .filter((val) => {
              console.log(val[1].title);
              if (search === "") {
                return val;
              } else if (
                val[1].title.toLowerCase().includes(search.toLowerCase())
              ) {
                return val[1].title;
              }
            })
            .map(([key, { title, url }]) => (
              <h5
                key={key}
                onClick={() => {
                  router.push(`/?genre=${key}`);
                }}
                className={` last:pr-24 cursor-pointer bg-gray-600 rounded-lg  p-2 text-gray-400 hover:bg-[#7DE5ED] hover:text-white`}
              >
                {title}
              </h5>
            ))}
        </div>
      </div>
      {/* Popular movie */}
      <h5 className="text-white mt-12 mb-3">Popular Shows</h5>
      <div className="flex flex-col space-y-3">
        {PopularMovie.map((movie) => (
          <div
            key={movie.id}
            className="flex flex-row space-x-2 w-[2/3] rounded-lg bg-gray-600"
          >
            <img
              layout="responsive"
              loading="lazy"
              src={movie.url}
              className="w-[150px] h-[100px] rounded-lg"
            />
            <div>
              <h5 className="text-white mt-2">{movie.name}</h5>
              <p className="text-[10px] text-gray-300">{movie.desc}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Popular Actor */}
      <h5 className="text-white mt-12 mb-3">Popular Actor</h5>
      <div className="flex flex-col space-y-5">
        {PopularActor.map((actor) => (
          <div
            key={actor.id}
            className="flex flex-row space-x-2 w-[2/3] rounded-lg"
          >
            <img
              layout="responsive"
              loading="lazy"
              src={actor.url}
              className="w-10 rounded-full"
            />
            <div>
              <h6 className="text-white mt-2">{actor.name}</h6>
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
