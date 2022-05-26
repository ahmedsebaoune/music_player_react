import React, {useState, useRef} from "react";
import img from "../img/volume.svg";
import {useEffect} from "react";
import Icon from '@mui/material/Icon';
import { OverlayTrigger,Popover } from 'react-bootstrap';


const Player = ({
                    songs,
                    setSongs,
                    setCurrentSong,
                    currentSong,
                    setIsPlaying,
                    isPlaying,
                    audioRef,
                    songTime,
                    setSongTime,
                }) => {
    const [volIcon, setVolIcon] = useState("volume_up");
    const [volume, setVolume] = useState(50);
    const ref = useRef(null);

    const getTime = (time) => {
        const minutes = Math.trunc(Math.ceil(time) / 60)
            .toString()
            .padStart(2, "0");
        const seconds = (Math.ceil(time) % 60).toString().padStart(2, "0");
        return `${minutes}:${seconds}`;
    };

    const changeSlider = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongTime({
            currentTime: e.target.value,
            duration: songTime.duration,
        });
    };
    // functions

    const playHandler = (e) => {
        if (!isPlaying) {
            e.target.innerHTML = "pause_arrow";
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        } else {
            console.log("time", songTime.currentTime);
            console.log("Stopping");
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
            e.target.innerHTML = "play_arrow";
        }
    };
    const skip = async (param) => {
        let index = songs.findIndex((s) => {
            return s.id === currentSong.id;
        });
        if (param === "skipForth") {
            await setCurrentSong(songs[(index + 1) % songs.length]);
        } else {
            if (index == 0) setCurrentSong(songs[songs.length - 1]);
            else {
                await setCurrentSong(songs[index - 1]);
            }
        }
        if (isPlaying) {
            audioRef.current.play();
        }
    };
    const changeVolume = (e) => {
        setVolume(e.target.value);
        console.log(volume);
        audioRef.current.volume =
            Math.round((e.target.value / 100 + Number.EPSILON) * 10) / 10;
        if (e.target.value == 0) setVolIcon("volume_mute");
        else if (e.target.value > 50) setVolIcon("volume_up");
        else if (e.target.value < 50) setVolIcon("volume_down");
    };
    const popover = (
        <Popover id="popover-basic">
            <Popover.Body>
                <div className="volume">
                    <input
                        type="range"
                        className="volRange"
                        value={volume}
                        min={0}
                        max={100}
                        onChange={changeVolume}
                    />
                </div>
            </Popover.Body>
        </Popover>
    );
    return (
        <div className="player">
            <div class="media-controls" >
                <div className="media-btns" ref={ref}>
                    <div className="media-buttons">

                        <button className="rewind-button media-button" label="rewind"
                                onClick={() => skip("skipBack")}
                        >
                        <span className="button-icons">
                      <Icon
                          baseClassName="material-icons-round"
                      >
                        skip_previous
                     </Icon>
            </span>

                            <span className="button-text milli">Back</span>
                        </button>

                        <button className="play-button media-button" label="play">
                            <div className="button-icons delta">
                                <Icon
                                    onClick={playHandler}
                                    className="play"
                                    baseClassName="material-icons-round"
                                >
                                    play_arrow
                                </Icon>
                            </div>
                            <span className="button-text milli">Play</span>
                        </button>

                        <button className="fast-forward-button media-button" label="fast forward"
                                onClick={() => skip("skipForth")}
                        >

                            <div className="button-icons">
                                <Icon
                                    baseClassName="material-icons-round"
                                >
                                    skip_next
                                </Icon>
                            </div>
                            <span className="button-text milli">Skip</span>
                        </button>

                    </div>
                    <OverlayTrigger trigger="click" placement="top" overlay={popover}  container={ref}>
                        <button className="media-button" label="fast forward"
                        >
                            <div className="button-icons">
                                <Icon
                                    baseClassName="material-icons-round"
                                >
                                    {volIcon}
                                </Icon>
                            </div>
                            <span className="button-text milli">Volume</span>
                        </button>
                    </OverlayTrigger>
                </div>

                <div class="media-progress">
                    <div className="range">
                        <input
                            type="range"
                            max={songTime.duration}
                            min={0}
                            value={songTime.currentTime}
                            onChange={changeSlider}
                        />
                        <div className="time">
                            <p>{getTime(songTime.currentTime)}</p>
                            <p>{getTime(songTime.duration)}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default Player;
