import React, { useContext, useState, useRef } from "react";
import { assets, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Sidebar = ({ setActivePage }) => {
  const { setTrack, play } = useContext(PlayerContext);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  // Filter songs live
  const filteredSongs = songsData.filter((song) =>
    song.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSongClick = (song) => {
    setTrack(song);
    play();
    setQuery("");             // clear search box
    inputRef.current?.blur(); // close focus/results
    setActivePage("home");    // go back to Home
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:w-1/4 w-64 max-w-[280px] h-full p-2 flex-col gap-2 text-white">
        {/* 🔹 Topbar Section (Search + Home) */}
        <div className="bg-[#121212] p-3 rounded flex flex-col gap-3">
          {/* Home + Search bar */}
          <div className="flex items-center gap-2">
            {/* Home Icon */}
            <div
              onClick={() => setActivePage("home")}
              className="bg-[#242424] p-2 rounded-full cursor-pointer"
            >
              <img className="w-5" src={assets.home_icon} alt="home" />
            </div>

            {/* Search Bar */}
            <div className="flex items-center flex-1 bg-[#242424] rounded-full px-3 py-1">
              <img src={assets.search_icon} alt="search" className="w-5 mr-2" />
              <input
                ref={inputRef}
                type="text"
                placeholder="What do you want to play"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="bg-transparent outline-none text-white flex-1 placeholder-gray-400 text-sm"
              />
            </div>
          </div>

          {/* Search Results */}
          {query && (
            <div className="bg-[#242424] rounded mt-2 max-h-40 overflow-y-auto text-sm">
              {filteredSongs.length > 0 ? (
                filteredSongs.map((song, i) => (
                  <div
                    key={i}
                    onClick={() => handleSongClick(song)}
                    className="px-3 py-2 hover:bg-[#333] cursor-pointer flex items-center gap-2"
                  >
                    <img
                      src={song.image}
                      alt={song.name}
                      className="w-8 h-8 rounded"
                    />
                    <span>{song.name}</span>
                  </div>
                ))
              ) : (
                <p className="px-3 py-2 text-gray-400">No songs found</p>
              )}
            </div>
          )}
        </div>

        {/* 🔹 Library Section */}
        <div className="bg-[#121212] h-full rounded flex flex-col mt-2">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img className="w-8" src={assets.stack_icon} alt="library" />
              <p className="font-semibold">Your Library</p>
            </div>
            <div className="flex items-center gap-3">
              <img className="w-5" src={assets.arrow_icon} alt="arrow" />
              <img className="w-5" src={assets.plus_icon} alt="plus" />
            </div>
          </div>

          {/* Playlist Section */}
          <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-1 pl-4">
            <h1>Create your first Playlist</h1>
            <p className="font-light">It’s easy, we’ll help you</p>
            <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
              Create playlist
            </button>
          </div>

          {/* Podcast Section */}
          <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-1 pl-4 mt-4">
            <h1>Find some Podcasts to Follow</h1>
            <p className="font-light">We’ll keep you updated on new episodes</p>
            <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
              Browse Podcasts
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav
        className="lg:hidden fixed left-0 bottom-0 w-full h-[55px]
             bg-[#121212] text-white flex justify-around items-center 
             border-t border-gray-800 z-40"
      >
        <div
          onClick={() => setActivePage("home")}
          className="flex flex-col items-center cursor-pointer"
        >
          <img className="w-6" src={assets.home_icon} alt="home" />
          <p className="text-xs">Home</p>
        </div>
        <div
          onClick={() => setActivePage("search")}
          className="flex flex-col items-center cursor-pointer"
        >
          <img className="w-6" src={assets.search_icon} alt="search" />
          <p className="text-xs">Search</p>
        </div>
        <div
          onClick={() => setActivePage("library")}
          className="flex flex-col items-center cursor-pointer"
        >
          <img className="w-6" src={assets.stack_icon} alt="library" />
          <p className="text-xs">Library</p>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
