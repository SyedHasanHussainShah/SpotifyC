import React, { useContext, useState } from "react";
import Sidebar from "./Sidebar";
import Player from "./Player";
import Library from "./Library";
import Display from "./Display";
import SearchMobile from "./SearchMobile"; // your existing mobile search
import { PlayerContext } from "../context/PlayerContext";

const Home = () => {
  const { audioRef, track } = useContext(PlayerContext);
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="h-screen bg-black flex flex-col">
      {/* Main area */}
      <div className="h-[90%] flex">
        {/* Sidebar (desktop + mobile bottom nav) */}
        <Sidebar setActivePage={setActivePage} />

        {/* Main Content */}
          {activePage === "home" && <Display />}

          {activePage === "search" && (
            <>
              {/* Mobile Search */}
              <div className="lg:hidden h-full">
                <SearchMobile />
              </div>
            </>
          )}

          {activePage === "library" && <Library />}
        </div>

      {/* Bottom Player */}
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
};

export default Home;
