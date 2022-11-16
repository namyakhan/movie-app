import React, { useState } from "react";
import requests from "../utils/requests";
import { useRouter } from "next/router";
import { MapPinIcon, BellAlertIcon } from "@heroicons/react/24/outline";

const Nav = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <nav className="bg-navy w-[500px] h-screen p-6">
      <div className="mt-4  flex flex-row items-center  justify-between ">
        <div className="flex flex-row items-center space-x-2">
          <img
            layout="responsive"
            loading="lazy"
            src="/admin.jpg"
            className="w-10 rounded-full"
          />
          <p>Namya</p>
        </div>
        <div className="flex flex-row items-center space-x-5">
          <MapPinIcon className="h-6 text-white" />
          <BellAlertIcon className="h-6 text-white" />
        </div>˝
      </div>

      {/* Search Filter */}
      <input type="text" placeholder="Search" onChange={handleChange} className="" />
      <div className="flex flex-col p-10">
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
              onClick={() => router.push(`/?genre=${key}`)}
              className="last:pr-24 cursor-pointer"
            >
              {title}
            </h5>
          ))}
      </div>
    </nav>
  );
};

export default Nav;
