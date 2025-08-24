import bell_icon from "./bell.png";
import home_icon from "./home.png";
import like_icon from "./like.png";
import loop_icon from "./loop.png";
import mic_icon from "./mic.png";
import next_icon from "./next.png";
import play_icon from "./play.png";
import pause_icon from "./pause.png";
import plays_icon from "./plays.png";
import prev_icon from "./prev.png";
import search_icon from "./search.png";
import shuffle_icon from "./shuffle.png";
import speaker_icon from "./speaker.png";
import stack_icon from "./stack.png";
import zoom_icon from "./zoom.png";
import plus_icon from "./plus.png";
import arrow_icon from "./arrow.png";
import mini_player_icon from "./mini-player.png";
import queue_icon from "./queue.png";
import volume_icon from "./volume.png";
import arrow_right from "./right_arrow.png";
import arrow_left from "./left_arrow.png";
import spotify_logo from "./spotify_logo.png";
import clock_icon from "./clock_icon.png";

// Album Images
import sidhu from "./img/sidhu.jpg";
import aujla from "./img/aujla.jpg";
import sub from "./img/sub.jpg";
import sitandar from "./img/sitandar.jpg";
import tensromance from "./img/10s-romance-tamil.jpg";
import arrmix from "./img/arr-mix.jpg";
import ten from "./img/ten.jpg";
import arjit from "./img/arjit.jpg";
import atif from "./img/atif.jpg";

// Song Thumbnails
import bedardi from "./img/song-thumb/bedardi.jpg";
import cheques from "./img/song-thumb/cheques.jpg";
import days from "./img/song-thumb/days.jpg";
import lett from "./img/song-thumb/lett.jpg";
import million from "./img/song-thumb/million.jpg";
import pal from "./img/song-thumb/pal.jpg";
import radhe from "./img/song-thumb/radhe.jpg";
import sadje from "./img/song-thumb/sadje.jpg";
import sayraa from "./img/song-thumb/sayraa.jpg";
import udar from "./img/song-thumb/udar.jpg";
import supreme from "./img/song-thumb/supreme.jpg";
import subh from "./img/song-thumb/subh.jpg";
import wavy from "./img/song-thumb/wavy.jpg";
import god from "./img/song-thumb/god.jpg";
import gabru from "./img/song-thumb/Gabru.jpg";
import peace from "./img/song-thumb/Peace.jpg";
import watch1 from "./img/song-thumb/watch1.jpg";
import muskil1 from "./img/song-thumb/muskil1.jpg";
import beef1 from "./img/song-thumb/beef1.jpg";
import ashique from "./img/song-thumb/ashique.jpg";
import mash from "./img/song-thumb/mash.jpg";
import self from "./img/song-thumb/self.jpg";
import game1 from "./img/song-thumb/game1.jpg";
import badle from "./img/song-thumb/badle.jpg";
import raftaa from "./img/song-thumb/raftaa.jpg";
import dill from "./img/song-thumb/dill.jpg";
// Songs
import bedarya from "./songs/bedarya.mp3";
import cheques1 from "./songs/cheques1.mp3";
import days1 from "./songs/days1.mp3";
import god1 from "./songs/god.mp3";
import lett1 from "./songs/lett.mp3";
import millionare from "./songs/millionare.mp3";
import pal1 from "./songs/pal.mp3";
import Radhe from "./songs/Radhe.mp3";
import sadje1 from "./songs/sajde.mp3";
import sayraa1 from "./songs/sayraa.mp3";
import udar1 from "./songs/udar.mp3";
import supreme1 from "./songs/supreme.mp3";
import subh1 from "./songs/subh.mp3";
import wavy1 from "./songs/wavy.mp3";
import reason from "./songs/reason.mp3";
import gabruu from "./songs/Gabru.mp3";
import peacee from "./songs/Peace.mp3";
import watch from "./songs/watch.mp3";
import muskil from "./songs/muskil.mp3";
import beef from "./songs/beef.mp3";
import ashique1 from "./songs/ashique.mp3";
import mashup from "./songs/mashup.mp3";
import Selfmade from "./songs/Selfmade.mp3";
import game from "./songs/game.mp3";
import badlee from "./songs/badlee.mp3";
import rafta from "./songs/rafta.mp3";
import dil from "./songs/dil.mp3";
export const assets = {
  bell_icon,
  home_icon,
  like_icon,
  loop_icon,
  mic_icon,
  next_icon,
  play_icon,
  plays_icon,
  prev_icon,
  search_icon,
  shuffle_icon,
  speaker_icon,
  stack_icon,
  zoom_icon,
  plus_icon,
  arrow_icon,
  mini_player_icon,
  volume_icon,
  queue_icon,
  pause_icon,
  arrow_left,
  arrow_right,
  spotify_logo,
  clock_icon,
};

export const albumsData = [
 {
  id: 0,
  name: "Karan Aujla",
  image: aujla,
  desc: "Punjabi songs to keep you at peace",
  bgColor: "#FF6B6B", // vibrant red-orange
},
{
  id: 1,
  name: "Sidhu Moosewala",
  image: sidhu,
  desc: "Sidhu Moosewala's Top Hits",
  bgColor: "#845EC2", // deep purple
},
{
  id: 2,
  name: "Satinder Sartaaj",
  image: sitandar,
  desc: "Punjabi Folk Songs",
  bgColor: "#008E9B", // teal green
},
{
  id: 3,
  name: "Shubh",
  image: sub,
  desc: "Amazing tracks by Shubh",
  bgColor: "#FF9671", // coral orange
},
{
  id: 4,
  name: "Arijit Singh",
  image: arjit,
  desc: "Best Indian Songs",
  bgColor: "#FFC75F", // warm golden yellow
},
{
  id: 5,
  name: "Atif Aslam",
  image: atif,
  desc: "Best Pakistani Song",
  bgColor: "#2C73D2", // rich blue
},
{
  id: 6,
  name: "A.R. Rahman",
  image: arrmix,
  desc: "Hits of A.R. Rahman that will kill you",
  bgColor: "#2C73D2", // rich blue
},

];


export const songsData = [
  // ===== Karan Aujla (albumId: 0)
  { id: 0,  name: "Gabru",   image: gabru, file: gabruu,   desc: "Top Punjabi Hit", duration: "3:31", albumId: 0 },
  { id: 1,  name: "Peace",   image: peace, file: peacee,   desc: "Top Punjabi Hit", duration: "2:53", albumId: 0 },
  { id: 15, name: "Wavy",    image: wavy,  file: wavy1,    desc: "Top Punjabi Hit", duration: "2:41", albumId: 0 },
  { id: 16, name: "Reason",  image: gabru, file: reason,   desc: "Top Punjabi Hit", duration: "3:09", albumId: 0 },

  // ===== Sidhu Moosewala (albumId: 1)
  { id: 4,  name: "These Days", image: days, file: days1, desc: "Top Punjabi Hit", duration: "3:32", albumId: 1 },
  { id: 5,  name: "Signed to God", image: god, file: god1, desc: "Top Punjabi Hit", duration: "2:32", albumId: 1 },
  { id: 19, name: "Same Beef", image: beef1, file: beef, desc: "Top Punjabi Hit", duration: "4:22", albumId: 1 },
  { id: 23, name: "Game", image: game1, file: game, desc: "Top Punjabi Hit", duration: "4:47", albumId: 1 },
  { id: 17, name: "Watch Out", image: watch1, file: watch, desc: "Top Punjabi Hit", duration: "3:57", albumId: 1 },
  { id: 21, name: "Selfmade", image: self, file: Selfmade, desc: "Top Punjabi Hit", duration: "3:00", albumId: 1 },

  // ===== Satinder Sartaaj (albumId: 2)
  { id: 12, name: "Udaarian", image: udar, file: udar1, desc: "Punjabi Folk Song", duration: "5:50", albumId: 2 },

  // ===== Shubh (albumId: 3)
  { id: 14, name: "MVP", image: subh, file: subh1, desc: "Top Punjabi Hit", duration: "3:18", albumId: 3 },
  { id: 3,  name: "Cheques", image: cheques, file: cheques1, desc: "Top Punjabi Hit", duration: "3:09", albumId: 3 },
  { id: 13, name: "Supreme", image: supreme, file: supreme1, desc: "Top Punjabi Hit", duration: "2:56", albumId: 3 },

  // ===== Arijit Singh / Bollywood (albumId: 4)
  { id: 24, name: "Badlii Se Hawa", image: badle, file: badlee, desc: "Top Bollywood Hit", duration: "4:01", albumId: 4 },
  { id: 2,  name: "OO Bedardya", image: bedardi, file: bedarya, desc: "Top Bollywood Hit", duration: "5:26", albumId: 4 },
  { id: 6,  name: "Let Me Down Slowly", image: lett, file: lett1, desc: "Top Bollywood Hit", duration: "2:57", albumId: 4 },
  { id: 8,  name: "Pal Pal Jeena", image: pal, file: pal1, desc: "Top Bollywood Hit", duration: "2:28", albumId: 4 },
  { id: 18, name: "Ae Dil hai Muskil", image: muskil1, file: muskil, desc: "Top Bollywood Hit", duration: "5:07", albumId: 4 },
  { id: 20, name: "To HI Ashique", image: ashique, file: ashique1, desc: "Top Bollywood Hit", duration: "5:39", albumId: 4 },

  // ===== Atif Aslam (albumId: 5)
  { id: 25, name: "Rafta Rafta", image: raftaa, file: rafta, desc: "Top Pakistani Song", duration: "3:33", albumId: 5 },
  { id: 26, name: "Dil Diyan Gallan", image: dill, file: dil, desc: "Top Pakistani Song", duration: "3:05", albumId: 5 },

  // ===== A.R. Rahman (albumId: 6)
  { id: 7,  name: "Millionaire", image: million, file: millionare, desc: "ARR Special", duration: "3:30", albumId: 6 },
  { id: 9,  name: "Radhe Radhe", image: radhe, file: Radhe, desc: "ARR Special", duration: "3:03", albumId: 6 },
  { id: 10, name: "Sajde", image: sadje, file: sadje1, desc: "ARR Special", duration: "8:08", albumId: 6 },
  { id: 11, name: "Saiyaara", image: sayraa, file: sayraa1, desc: "ARR Special", duration: "4:08", albumId: 6 },
  { id: 22, name: "Love Mashup", image: mash, file: mashup, desc: "ARR Special", duration: "15:05", albumId: 6 },
];