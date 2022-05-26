import React from "react";

const Song = ({ currentSong }) => {
  return (
    <div className="song">
      <img src={currentSong.cover} alt="imgae of the song" />
      <h3>{currentSong.name}</h3>
      <p>{currentSong.artist}</p>
    </div>
  );
};
export default Song;
