import React from "react";
import sImg from "../assets/img/s.jpg";
import yoImg from "../assets/img/yo.jpg";
import sidImg from "../assets/img/sid.jpg";
import aujlImg from "../assets/img/aujl.jpg";
import ariImg from "../assets/img/arijit.jpg";
import atiffImg from "../assets/img/atiff.jpg";


const artists = [
  {
    id: 1,
    name: "Yo Yo Honey Singh",
    role: "Artist",
    image: yoImg, // ✅ fixed
  },
  {
    id: 2,
    name: "Shubh",
    role: "Artist",
    image: sImg, // ✅ using local import instead of external link
  },
  {
    id: 3,
    name: "Sidhu Moose Wala",
    role: "Artist",
    image: sidImg,
  },
  {
    id: 4,
    name: "Karan Aujla",
    role: "Artist",
    image: aujlImg,
  },
  {
    id: 5,
    name: "Arijit Singh",
    role: "Artist",
    image: ariImg,
  },
  {
    id: 6,
    name: "Atif Aslam",
    role: "Artist",
    image: atiffImg,
  },
];

const Library = () => {
  return (
    <div className="h-screen w-screen bg-black text-white overflow-y-auto pb-20">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Your Library</h1>
          <div className="flex space-x-4 text-xl">
            <span role="img" aria-label="search" className="cursor-pointer">
              🔍
            </span>
            <span role="img" aria-label="plus" className="cursor-pointer">
              ➕
            </span>
          </div>
        </div>

        {/* Recents Section */}
        <h2 className="text-lg font-semibold mb-4">Recents</h2>
        <div className="space-y-3">
          {artists.map((artist) => (
            <div
              key={artist.id}
              className="flex items-center gap-3 hover:bg-[#181818] p-3 rounded-lg cursor-pointer"
            >
              <img
                src={artist.image}
                alt={artist.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-medium">{artist.name}</p>
                <p className="text-gray-400 text-sm">{artist.role}</p>
              </div>
            </div>
          ))}

          {/* Add artist */}
          <div className="flex items-center gap-3 p-3 hover:bg-[#181818] rounded-lg cursor-pointer">
            <div className="w-12 h-12 flex items-center justify-center bg-gray-700 rounded-full text-xl">
              ➕
            </div>
            <p className="font-medium">Add artists</p>
          </div>
        </div>
      </div>

      {/* Bottom Now Playing Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-3">
          <img
            src={yoImg}
            alt="song"
            className="w-12 h-12 rounded"
          />
          <div>
            <p className="font-medium">Jatt Mehkma</p>
            <p className="text-gray-400 text-sm">Yo Yo Honey Singh</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 text-xl">
          <span className="cursor-pointer">➕</span>
          <button className="bg-white text-black px-3 py-1 rounded-full font-bold">
            ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default Library;
