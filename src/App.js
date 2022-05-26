import { React, useState, useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

//importing components
import Home from "./components/home";
import PlayList from "./components/PlayList";
// importing styles
import "./styles/app.scss";
// importing utils
import data from "./utils";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [libraryShow, setLibraryShow] = useState(false);
  // ref
  const audioRef = useRef(null);

  // setting attribute of active to false
  const [isPlaying, setIsPlaying] = useState(false);
  const [songTime, setSongTime] = useState({
    currentTime: 0,
    duration: "end",
  });
  useEffect(() => {
    setSongs(
      songs.map((s) => {
        if (s.id === currentSong.id) {
          return { ...s, active: true };
        } else return { ...s, active: false };
      })
    );
  }, [currentSong]);
  const setDuration = (e) => {
    setSongTime({
      currentTime: songTime.currentTime,
      duration: e.target.duration,
    });
  };
  const updateTimeHandler = (e) => {
    setSongTime({
      currentTime: e.target.currentTime,
      duration: songTime.duration,
    });
  };
  const songEndHandler = async () => {
    let index = songs.findIndex((s) => {
      return s.id === currentSong.id;
    });
    await setCurrentSong(songs[(index + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div className="app">
      <PlayList
        libraryShow={libraryShow}
        songTime={songTime}
        audioRef={audioRef}
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        currentSong={currentSong}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
      />
      <Home
        libraryShow={libraryShow}
        setLibraryShow={setLibraryShow}
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        songTime={songTime}
        setSongTime={setSongTime}
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
      />
      <audio
        onEnded={songEndHandler}
        onCanPlay={setDuration}
        canplaythrough={setDuration}
        onTimeUpdate={updateTimeHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
