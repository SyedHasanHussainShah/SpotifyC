import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumDatalocal = albumsData[id];
  const { playWithId } = useContext(PlayerContext);

  // ✅ Filter songs of only this album
  const albumSongs = songsData.filter(song => song.albumId === albumDatalocal.id);

  return (
    <>
      <Navbar />
      <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
        <img className='w-40 sm:w-48 rounded' src={albumDatalocal.image} alt="" />
        <div className='flex flex-col'>
          <p>Playlist</p>
          <h2 className='text-3xl sm:text-4xl font-bold mb-2 sm:mb-4 md:text-6xl'>
            {albumDatalocal.name}
          </h2>
          <h4>{albumDatalocal.desc}</h4>
          <p className='mt-2 text-sm sm:text-base'>
            <img className='inline-block w-4 sm:w-5' src={assets.spotify_logo} alt="" />
            <b> Spotify Clone</b> 33,62,251 likes | 
            <b> {albumSongs.length} Songs </b>| about {albumSongs.length * 3} min
          </p>
        </div>
      </div>

      {/* Header row - only visible on sm+ */}
      <div className='hidden sm:grid grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
        <p><b className='mr-4'>#</b>Title</p>
        <p>Album</p>
        <p>Date Added</p>
        <img className='m-auto w-4' src={assets.clock_icon} alt="" />
      </div>
      <hr className="hidden sm:block" />

      {albumSongs.map((item, index) => (
        <div
          onClick={() => playWithId(item.id)}
          key={index}
          className='
            p-2 items-center 
            text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer rounded
            flex sm:grid sm:grid-cols-4 gap-3
          '
        >
          {/* Left side (mobile flex) */}
          <div className="flex items-center gap-3 col-span-1">
            <b className='text-xs sm:text-base'>{index + 1}</b>
            <img className='w-10 h-10 rounded' src={item.image} alt="" />
            <span className="text-sm sm:text-base">{item.name}</span>
          </div>

          {/* Album name - only show on sm+ */}
          <p className='hidden sm:block text-[15px]'>{albumDatalocal.name}</p>

          {/* Date - only show on sm+ */}
          <p className='hidden sm:block text-[15px]'>3 days ago</p>

          {/* Duration → always in last column on desktop, right side on mobile */}
          <p className='text-xs sm:text-[15px] ml-auto sm:ml-0 sm:text-center'>
            {item.duration}
          </p>
        </div>
      ))}
    </>
  )
}

export default DisplayAlbum
