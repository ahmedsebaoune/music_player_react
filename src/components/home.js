import React, { useRef } from "react";
import Icon from '@mui/material/Icon';
import Song from "./song";
import Player from "./player";
import $ from "jquery";
window.jquery = window.$ = $;

function Home({
  songs,
  setSongs,
  setCurrentSong,
  currentSong,
  setIsPlaying,
  isPlaying,
  audioRef,
  songTime,
  setSongTime,
  playListRef,
  libraryShow,
  setLibraryShow,
}) {
  return (
    <div className={`home ${libraryShow ? "" : "homeFullWidth"}`}>
      <nav className="nav">
        <h1>Waves</h1>
        <button
          onClick={() => {
            setLibraryShow(!libraryShow);
          }}
        >
          <Icon>queue_music</Icon>
          Playlist
        </button>
      </nav>
      <Song currentSong={currentSong} />
      <Player
        songs={songs}
        setSongs={setSongs}
        songTime={songTime}
        setCurrentSong={setCurrentSong}
        setSongTime={setSongTime}
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
      />
    </div>
  );
}

export default Home;
