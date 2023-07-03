import React from "react";

const Song = ({ currentSong }) => {
  return (
    <div className="song">
      <div className="image"><div className="back">{currentSong.cover}</div></div>
      <div className="text">
        <h3>{currentSong.name}</h3>
        <p>{currentSong.artist}</p>
      </div>
    </div>
  );
};
export default Song;
