import { useContext, useEffect, useRef, useState } from "react";
import { Context } from '../../Context/Context';
import React from "react";
import { artistList, playlist } from "playList/list/playList";
import './mainComponent.css';
// import {State} from '../../types/types';

export default function Player({audioData}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const backPosterRef = useRef<HTMLImageElement>(null);
  const { state, dispatch } = useContext(Context);
  const [numberPlay, setNumberPlay] = useState(0);


  const playlistLength = Object.keys(playlist).length;

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
    setIsPlaying(true);
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      if (audioRef.current.duration) {
        setDuration(audioRef.current.duration);
      } else {
        setDuration(0);
      }
      if (audioRef.current.currentTime == audioRef.current.duration) {
        setTimeout(handlePlayPause, 1000);
        // setTimeout(playNext, 1000);
        playNext();
      }
    }
  };

  const handleSeek = (e) => {
    if (audioRef.current) {
      audioRef.current.currentTime = e.target.value;
      setCurrentTime(e.target.value);
    }
    
  };

  function formatDuration(durationSeconds: number) {
    const minutes = Math.floor(durationSeconds / 60);
    const seconds = Math.floor(durationSeconds % 60);
    const formattedSeconds = seconds.toString().padStart(2, "0");
    return `${minutes}:${formattedSeconds}`;
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    }
    // return () => {
    //   if (audioRef.current) {
    //     audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
    //   }
    // };
    
  }, []);

  const updateSongData = (number: number) => {
    handlePause();
    // handlePlayPause();
    dispatch({ type: 'updateSrc', payload: { src: playlist[number].src } });
    dispatch({ type: 'updateArtist', payload: { artist: playlist[number].artist } });
    dispatch({ type: 'updateTitle', payload: { title: playlist[number].title } });
    dispatch({ type: 'updatePoster', payload: { poster: playlist[number].poster } });
    dispatch({ type: 'updateBackPoster', payload: { backPoster: playlist[number].backPoster } });
    setNumberPlay(number);
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
      setCurrentTime(0);
      audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
      audioRef.current.src = audioData.src;
    }
    // setTimeout(handlePlayPause, 1000);
    setTimeout(handlePlay, 1000);

    // console.log(state.src, isPlaying, number);
    // console.log('audioRef.current: ', audioRef.current?.src);
  }

  const playNext = () => {
        // console.log('next', numberPlay);
        let num = numberPlay;
        if (num >= playlistLength-1) {
            // setNumberPlay(0);
            num = 0;
        }
        else {
          num = num + 1;
          // setNumberPlay(num);
        }
    //     audioRef.current.pause();
    //     setIsPlaying(false);
    //     audio.currentTime = 0;
    //     progress.value = 0;
        updateSongData(num);
    //     updateCurrTime(sound);
    //     updateTime(duration);
    //     playAudio();
    }

    const playPrev = () => {
      // console.log('prev', numberPlay);
      let num = numberPlay;
      if (num == 0) {
        num = playlistLength-1
        // setNumberPlay(playlistLength-1);
      }
      else {
        num = num - 1;
        // setNumberPlay(num);
      }
      // // audioRef.current.pause();
      // setIsPlaying(false);
      // // audio.currentTime = 0;
      // // progress.value = 0;
      updateSongData(num);
      // updateCurrTime(sound);
      // updateTime(duration);
      // playAudio();
}

const changeVolume = (e) => {
  if (audioRef.current) {
    audioRef.current.volume = e.target.value;
  }
}

const mute = () => {
  if (audioRef.current && audioRef.current.volume == 0) {
    audioRef.current.volume = 1;
  } else if (audioRef.current) {
    audioRef.current.volume = 0;
  }
}

const selectMusic = (e) => {
  const list = playlist;
  let music;
  const value = e.target.textContent;
  const artist = value.split('.')[0];
  const title = value.split('.')[1].trim().slice(1,-1);

  // console.log(artist, title);
  for (const prop in list) {
    
    if(list[prop].artist == artist && list[prop].title == title) {
      setNumberPlay(playlistLength-1);
      updateSongData(+prop);
      // console.log(prop);
      // console.log(list[prop]);
    }
  }
  // console.log(e.target.textContent);
}

    return (
    <main className = "main-container">
        <img ref = {backPosterRef} src = {audioData.backPoster} className = "page" alt=''></img>
        <audio className = "sound" ref={audioRef} src={audioData.src} />
        <div className="container">
            <div className="controls"></div>
            <div className = "play-list">
                <ul className = "list">
                  {artistList.map((elem, index) => {
                    return (
                      <li className="new-artist" key={index+101} onClick={selectMusic}>
                        {elem}
                      </li>
                    )
                  })}
                </ul>
            </div>
            <div 
                className = "poster"
                style={{ backgroundImage: `url(${audioData.poster})` }}
            ></div>
            <div className = {!isPlaying ? "play" : "play pause"} onClick={handlePlayPause}></div>
            <div className = "next" onClick={playNext}></div>
            <div className = "prev" onClick={playPrev}></div>
            <div className = "artist">{audioData.artist as string}</div>
            <div className = "song-title">{audioData.title as string}</div>
            <input
              className = "progress-song"
              type="range"
              min="0"
              max={duration ? duration : 0}
              value={currentTime}
              onChange={handleSeek}
            />
            <div className = "current">{formatDuration(currentTime)}</div>
            <div className = "duration">{formatDuration(duration)}</div>
            <div className = "vol-mute" onClick={mute}></div>
            <div className = "count">
                <div className = "now-song">{numberPlay+1}</div>
                <div className = "line">/</div>
                <div className = "all-song">{Object.keys(playlist).length}</div>
            </div>
            <input type = "range" className = "volume" min = "0" max = "1" defaultValue = "1" step="0.1" onChange={changeVolume} />
            <div className="hamburger">
                <span className="h-line line1"></span>
                <span className="h-line line2"></span>
                <span className="h-line line3"></span>
            </div>
        </div>
    </main>
  );
}