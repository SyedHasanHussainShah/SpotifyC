import React, { useContext, useState, useRef } from "react";
import { songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";
import aImg from "../assets/img/a.jpg";
import bollyImg from "../assets/img/bolly.jpg";
import sadImg from "../assets/img/sad.jpg";
import musicImg from "../assets/img/music.jpg";
import liveImg from "../assets/img/live.jpg";
import madeImg from "../assets/img/made.jpg";
import upImg from "../assets/img/up.jpg";

const SearchMobile = () => {
  const { setTrack, play } = useContext(PlayerContext);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  const filteredSongs = songsData.filter((song) =>
    song.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSongClick = (song) => {
    setTrack(song);
    play();
    setQuery(""); // clear search box
    inputRef.current?.blur(); // close focus/results
  };

  return (
    <div className="h-screen w-screen bg-black text-white overflow-y-auto pb-20">
      <div className="p-6">
        {/* Header */}
        <h1 className="text-2xl font-bold mb-4">Search</h1>

        {/* Search input */}
        <div className="flex items-center bg-[#242424] rounded-full px-3 py-2 mb-2">
          <input
            ref={inputRef}
            type="text"
            placeholder="What do you want to listen to?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-transparent outline-none text-white flex-1 placeholder-gray-400 text-sm"
          />
        </div>

        {/* Search Results */}
        {query && (
          <div className="bg-[#181818] rounded mb-4 max-h-48 overflow-y-auto">
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
                  <span className="text-sm">{song.name}</span>
                </div>
              ))
            ) : (
              <p className="px-3 py-2 text-gray-400 text-sm">No songs found</p>
            )}
          </div>
        )}

        {/* Discover Section */}
        <div className="mt-6">
          <h2 className="font-semibold mb-2">Discover something new</h2>
          <div className="flex gap-3 overflow-x-auto no-scrollbar">
            {/* Hindi Pop */}
            <div className="min-w-[150px] h-[200px] relative rounded-lg overflow-hidden">
              <img
                src={aImg}
                alt="Punjabi Pop"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <span className="absolute bottom-2 left-2 text-white font-bold text-sm">
                #Punjabi pop
              </span>
            </div>

            {/* Bollywood Lofi */}
            <div className="min-w-[150px] h-[200px] relative rounded-lg overflow-hidden">
              <img
                src={bollyImg}
                alt="Bollywood Lofi"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <span className="absolute bottom-2 left-2 text-white font-bold text-sm">
                #bollywood lofi
              </span>
            </div>

            {/* Sad */}
            <div className="min-w-[150px] h-[200px] relative rounded-lg overflow-hidden">
              <img
                src={sadImg}
                alt="Sad"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <span className="absolute bottom-2 left-2 text-white font-bold text-sm">
                #sad
              </span>
            </div>
          </div>
        </div>

        {/* Browse Section */}
        {/* Browse Section */}
<div className="mt-6 mb-6">
  <h2 className="font-semibold mb-2">Browse all</h2>
  <div className="grid grid-cols-2 gap-3">
    {[
      { title: "Music", color: "bg-pink-600", img: musicImg },
      { title: "Live Events", color: "bg-purple-600", img: liveImg },
      { title: "Made For You", color: "bg-blue-600", img: madeImg },
      { title: "Upcoming", color: "bg-green-600", img: upImg },
    ].map((item, i) => (
      <div
        key={i}
        className={`${item.color} relative h-[100px] rounded-lg overflow-hidden flex items-end p-2`}
      >
        <img
          src={item.img}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <span className="relative font-semibold text-white text-lg">
          {item.title}
        </span>
      </div>
    ))}
  </div>
</div>

      </div>
    </div>
  );
};

export default SearchMobile;
