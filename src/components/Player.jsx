import React, { useContext, useState, useEffect } from "react";
import { assets, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";
import "./Player.css"; // for marquee
import ColorThief from "colorthief";

const Player = () => {
  const {
    seekBar,
    seekBg,
    play,
    pause,
    playStatus,
    track,
    after,
    before,
    seekBgClick,
    audioRef,
    setTrack,
  } = useContext(PlayerContext);

  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(false);
  const [showQueue, setShowQueue] = useState(false);
  const [miniMode, setMiniMode] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);

  // detect if mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Background gradient color state
  const [gradient, setGradient] = useState(
    "linear-gradient(to bottom, #222, #000)"
  );

  // 🎵 Local state for time
  const [currentTime, setCurrentTime] = useState({ minute: 0, second: 0 });
  const [totalTime, setTotalTime] = useState({ minute: 0, second: 0 });

  // Extract dominant + secondary color from track image
  useEffect(() => {
    if (!track?.image) return;
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = track.image;
    img.onload = () => {
      const colorThief = new ColorThief();
      try {
        const color = colorThief.getColor(img);
        const palette = colorThief.getPalette(img, 2);

        const [r, g, b] = color;
        const secondary = palette?.[1] || [r - 20, g - 20, b - 20];

        setGradient(
          `linear-gradient(to bottom, 
            rgb(${r}, ${g}, ${b}) 0%, 
            rgba(${secondary[0]}, ${secondary[1]}, ${secondary[2]}, 0.85) 50%, 
            #000 100%)`
        );
      } catch (e) {
        console.error("ColorThief failed", e);
      }
    };
  }, [track]);

  // Reset + load duration when track changes
  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;
    setCurrentTime({ minute: 0, second: 0 });
    setTotalTime({ minute: 0, second: 0 });

    const handleLoaded = () => {
      const total = Math.floor(audio.duration || 0);
      setTotalTime({
        minute: Math.floor(total / 60),
        second: total % 60,
      });
    };

    audio.addEventListener("loadedmetadata", handleLoaded);
    return () => audio.removeEventListener("loadedmetadata", handleLoaded);
  }, [track, audioRef]);

  // Sync progress bar + time with audio
  useEffect(() => {
    if (!audioRef.current) return;
    const audio = audioRef.current;

    const updateTime = () => {
      const current = Math.floor(audio.currentTime);
      const total = Math.floor(audio.duration || 0);

      setCurrentTime({
        minute: Math.floor(current / 60),
        second: current % 60,
      });

      setTotalTime({
        minute: Math.floor(total / 60),
        second: total % 60,
      });

      if (seekBar.current) {
        seekBar.current.style.width = `${(current / total) * 100}%`;
      }
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateTime);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateTime);
    };
  }, [audioRef, seekBar]);

  // Volume change
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      setMuted(newVolume === 0);
    }
  };

  // Toggle mute/unmute
  const toggleMute = () => {
    if (!audioRef.current) return;
    if (muted) {
      audioRef.current.volume = volume;
      setMuted(false);
    } else {
      audioRef.current.volume = 0;
      setMuted(true);
    }
  };

  // Format mm:ss
  const formatTime = (min, sec) => {
    const mm = min.toString().padStart(2, "0");
    const ss = sec.toString().padStart(2, "0");
    return `${mm}:${ss}`;
  };

  // Play from queue
  const playFromQueue = (song) => {
    if (setTrack) setTrack(song);
    if (audioRef.current) audioRef.current.play();
  };

  return (
    <>
      {/* Mobile Expanded Full Player */}
      {isMobile && mobileExpanded ? (
        <div
          className="fixed inset-0 text-white flex flex-col z-50"
          style={{
            background: gradient,
          }}
        >
          {/* Top Bar */}
          <div className="flex justify-between items-center px-4 pt-3">
            <i
              className="ri-arrow-down-s-line text-3xl cursor-pointer"
              onClick={() => setMobileExpanded(false)}
            ></i>

            <h2 className="text-lg font-bold truncate">{track.name}</h2>

            <i
              className="ri-more-2-fill text-2xl cursor-pointer"
              onClick={() => alert("Options menu opened")}
            ></i>
          </div>

          {/* Track Image */}
          <div className="flex-1 flex items-center justify-center mt-10">
            <img
              src={track.image}
              alt=""
              className="w-64 h-64 rounded-xl shadow-lg"
            />
          </div>

          {/* Track Info */}
          <div className="text-center mt-4 mb-5">
            <h2 className="text-xl font-bold">{track.name}</h2>
            <p className="text-sm opacity-75">{track.desc}</p>
          </div>

          {/* Controls */}
          <div className="flex flex-col items-center gap-4 px-4 mb-32">
            <div className="flex gap-6 items-center">
              <img
                onClick={before}
                className="w-8 cursor-pointer"
                src={assets.prev_icon}
                alt="prev"
              />
              {playStatus ? (
                <img
                  onClick={pause}
                  className="w-10 cursor-pointer"
                  src={assets.pause_icon}
                  alt="pause"
                />
              ) : (
                <img
                  onClick={play}
                  className="w-10 cursor-pointer"
                  src={assets.play_icon}
                  alt="play"
                />
              )}
              <img
                onClick={after}
                className="w-8 cursor-pointer"
                src={assets.next_icon}
                alt="next"
              />
            </div>

            {/* Seek Bar with Time */}
            <div className="flex items-center gap-2 w-full px-4">
              <p className="text-xs">
                {formatTime(currentTime.minute, currentTime.second)}
              </p>
              <div
                ref={seekBg}
                onClick={seekBgClick}
                className="flex-1 h-1 bg-gray-500 rounded-full cursor-pointer"
              >
                <hr
                  ref={seekBar}
                  className="h-1 border-none bg-green-500 rounded-full"
                />
              </div>
              <p className="text-xs">
                {formatTime(totalTime.minute, totalTime.second)}
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* Default Bottom Player */
        <div
          className={`fixed left-0 w-full bg-black text-white flex items-center justify-between px-3 py-2 z-50 h-[64px] sm:h-[72px] ${
            miniMode ? "scale-90 mb-1 mx-2 rounded-xl shadow-lg" : ""
          } bottom-[55px] lg:bottom-0`}
          onClick={() => isMobile && setMobileExpanded(true)}
        >
          {/* Left: Track Info */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <img
              className="w-10 h-10 sm:w-12 sm:h-12 rounded flex-shrink-0"
              src={track.image}
              alt=""
            />
            <div className="overflow-hidden w-28 sm:w-40 md:w-72 lg:w-96">
              <p className="text-xs sm:text-sm font-semibold animate-marquee">
                {track.name}
              </p>
              <p className="text-[10px] sm:text-xs opacity-75 animate-marquee">
                {track.desc}
              </p>
            </div>
          </div>

          {/* Right Controls */}
          {isMobile ? (
            <div
              className="flex items-center gap-3"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                onClick={toggleMute}
                className="w-5 cursor-pointer"
                src={muted ? assets.mute_icon : assets.speaker_icon}
                alt="speaker"
              />
              <img
                onClick={() => setMiniMode(!miniMode)}
                className="w-5 cursor-pointer"
                src={assets.mini_player_icon}
                alt="mini"
              />
              {playStatus ? (
                <img
                  onClick={pause}
                  className="w-6 cursor-pointer"
                  src={assets.pause_icon}
                  alt="pause"
                />
              ) : (
                <img
                  onClick={play}
                  className="w-6 cursor-pointer"
                  src={assets.play_icon}
                  alt="play"
                />
              )}
            </div>
          ) : (
            <>
              <div className="flex flex-col items-center gap-1 sm:gap-2 flex-1 w-full">
                <div className="flex gap-3 sm:gap-4 justify-center">
                  <img
                    className="w-4 sm:w-5 cursor-pointer"
                    src={assets.shuffle_icon}
                    alt="shuffle"
                  />
                  <img
                    onClick={before}
                    className="w-4 sm:w-5 cursor-pointer"
                    src={assets.prev_icon}
                    alt="prev"
                  />
                  {playStatus ? (
                    <img
                      onClick={pause}
                      className="w-5 sm:w-6 cursor-pointer"
                      src={assets.pause_icon}
                      alt="pause"
                    />
                  ) : (
                    <img
                      onClick={play}
                      className="w-5 sm:w-6 cursor-pointer"
                      src={assets.play_icon}
                      alt="play"
                    />
                  )}
                  <img
                    onClick={after}
                    className="w-4 sm:w-5 cursor-pointer"
                    src={assets.next_icon}
                    alt="next"
                  />
                  <img
                    className="w-4 sm:w-5 cursor-pointer"
                    src={assets.loop_icon}
                    alt="loop"
                  />
                </div>

                {/* Seek Bar with Time */}
                <div className="flex items-center gap-1 sm:gap-2 w-full max-w-xs sm:max-w-md px-1 sm:px-2">
                  <p className="text-[10px] sm:text-xs">
                    {formatTime(currentTime.minute, currentTime.second)}
                  </p>
                  <div
                    ref={seekBg}
                    onClick={seekBgClick}
                    className="flex-1 h-1 bg-gray-300 rounded-full cursor-pointer"
                  >
                    <hr
                      ref={seekBar}
                      className="h-1 border-none bg-green-600 rounded-full"
                    />
                  </div>
                  <p className="text-[10px] sm:text-xs">
                    {formatTime(totalTime.minute, totalTime.second)}
                  </p>
                </div>
              </div>

              {/* Right Controls */}
              <div className="hidden sm:flex items-center gap-2 lg:gap-3 opacity-75">
                <img
                  onClick={() => console.log("🎤 Open lyrics view")}
                  className="w-4 sm:w-5 cursor-pointer"
                  src={assets.mic_icon}
                  alt="mic"
                />
                <img
                  onClick={() => setShowQueue(true)}
                  className="w-4 sm:w-5 cursor-pointer"
                  src={assets.queue_icon}
                  alt="queue"
                />
                <img
                  onClick={toggleMute}
                  className="w-4 sm:w-5 cursor-pointer"
                  src={muted ? assets.mute_icon : assets.speaker_icon}
                  alt="speaker"
                />

                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={muted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-16 sm:w-20 accent-green-600 cursor-pointer"
                />

                <img
                  onClick={() => setMiniMode(!miniMode)}
                  className="w-4 sm:w-5 cursor-pointer"
                  src={assets.mini_player_icon}
                  alt="mini"
                />
                <img
                  onClick={() => document.documentElement.requestFullscreen()}
                  className="w-4 sm:w-5 cursor-pointer"
                  src={assets.zoom_icon}
                  alt="zoom"
                />
              </div>
            </>
          )}
        </div>
      )}

      {/* Queue Sidebar */}
      {showQueue && (
        <div className="fixed inset-0 sm:inset-y-0 sm:right-0 sm:w-80 bg-black bg-opacity-95 text-white p-4 z-50 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Queue</h2>
            <button
              onClick={() => setShowQueue(false)}
              className="text-white text-xl font-bold hover:text-red-500"
            >
              ✖
            </button>
          </div>
          <ul className="space-y-2">
            {songsData.map((song, index) => (
              <li
                key={index}
                onClick={() => playFromQueue(song)}
                className={`flex items-center gap-2 cursor-pointer p-2 rounded hover:bg-gray-700 ${
                  track.name === song.name ? "bg-green-700" : ""
                }`}
              >
                <img src={song.image} alt="" className="w-10 h-10 rounded" />
                <span className="flex-1 overflow-hidden animate-marquee">
                  {song.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Player;
