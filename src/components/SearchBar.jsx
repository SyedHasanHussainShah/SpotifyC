import React, { useState, useContext, useRef } from "react";
import { PlayerContext } from "../context/PlayerContext";


const SearchBar = ({ placeholder }) => {
  const { setTrack, play } = useContext(PlayerContext);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null); // 👈 for clearing focus

  const filteredSongs = songsData.filter((song) =>
    song.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSongClick = (song) => {
    setTrack(song);
    play();
    setQuery("");            // clear text
    inputRef.current.blur(); // 👈 remove focus to hide results/keyboard
  };

  return (
    <div className="w-full">
      {/* Input */}
      <div className="flex items-center bg-[#242424] rounded-full px-4 py-2">
        <img src={assets.search_icon} alt="search" className="w-5 mr-2" />
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-transparent outline-none text-white flex-1 placeholder-gray-400 text-sm"
        />
      </div>

      {/* Results */}
      {query && (
        <div className="bg-[#181818] rounded mt-3 max-h-56 overflow-y-auto">
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
                  className="w-10 h-10 rounded"
                />
                <div>
                  <p className="font-medium">{song.name}</p>
                  <p className="text-xs text-gray-400">{song.artist}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="px-3 py-2 text-gray-400">No songs found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
