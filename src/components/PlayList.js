import React from "react";
import { useEffect, useRef } from "react";
import SongItem from "./songItem";

const PlayList = ({
  songs,
  setSongs,
  currentSong,
  setCurrentSong,
  audioRef,
  isPlaying,
  setIsPlaying,
  songTime,
  libraryShow,
}) => {
  const playListRef = useRef(null);
  return (
    <div
      ref={playListRef}
      className={`playlist ${libraryShow ? "" : "toggle-out"}`}
    >
      <h1>Library</h1>
      <div className="songList">
        {songs.map((song) => {
          return (
            <SongItem
              songTime={songTime}
              playListRef={playListRef}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              audioRef={audioRef}
              song={song}
              currentSong={currentSong}
              setCurrentSong={setCurrentSong}
              songs={songs}
              setSongs={setSongs}
              id={song.id}
              key={song.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PlayList;
