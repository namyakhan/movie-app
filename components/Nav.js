import requests from "../utils/requests";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  return (
    <nav className="bg-navy">
      <div className="flex flex-col">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h5
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="last:pr-24 "
          >
            {title}
          </h5>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
