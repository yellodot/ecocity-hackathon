import React from "react";
import SearchBar from "./SearchBar";
import Filters from "./Filters";

function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg2EC48F w-screen">
        <div className="flex justify-center items-center text-6xl font-bold text-slate-900 text-center py-12 my-14 w-2/3">
          Envie de vous mettre au vert ? Ecocity vous aide à changer de ville.
        </div>
        <SearchBar />
        <Filters />
      </div>
    </>
  );
}

export default Home;
