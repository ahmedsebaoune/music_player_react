import React, { useEffect, useRef } from "react";

const SongItem = ({
  song,
  id,
  currentSong,
  setCurrentSong,
  songs,
  setSongs,
  audioRef,
  isPlaying,
  setIsPlaying,
  playListRef,
  songTime,
}) => {
  const sildeRef = useRef(null);
  const itemRef = useRef(null);
  useEffect(() => {
    if (id === currentSong.id) {
      const valWidth = Math.round(
        (songTime.currentTime * 100) / songTime.duration
      );
      sildeRef.current.style.right = 100 - valWidth + "%";
    } else {
      sildeRef.current.style.right = "100%";
    }
  }, [songTime]);
  useEffect(() => {
    if (currentSong.id === id) {
      playListRef.current.scrollTop = itemRef.current.offsetTop;
    }
  }, [currentSong]);

  const playSongHandler = () => {
    const setSong = songs.filter((i) => i.id === id);
    setCurrentSong(setSong[0]);
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      console.log("is playing");
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    } else {
      console.log("not playing");
    }
  };
  return (
    <div
      ref={itemRef}
      onClick={playSongHandler}
      className={"songItem " + (song.active ? "active" : "")}
    >
      <div ref={sildeRef} className="silde"></div>
      <div className="img-cont">
        <div className="back">{song.cover}</div>
      </div>
      <div className="text">
        <h3>{song.name}</h3>
        <p>{song.artist}</p>
      </div>
    </div>
  );
};

export default SongItem;
