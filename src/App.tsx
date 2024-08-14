import React, { useReducer } from 'react';
import './styles/App.css';
import { Context } from 'Context/Context';
import { reducer } from './reducer/reducer';
import Player from 'components/mainComponent/mainComponent';
// import PlayList from './playList/PlayList';
import {artistList, playlist} from "playList/list/playList";

function App() {

  const initialState = { 
    src: playlist[0].src, 
    artist: playlist[0].artist, 
    title: playlist[0].title, 
    poster: playlist[0].poster, 
    backPoster: playlist[0].backPoster
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log('App - src: ' , state.src);
  return (
    <Context.Provider 
      value={{ 
        state, 
        dispatch
      }}>
        {/* <div className="App"> */}
          {/* <header className="App-header"> */}
            <Player audioData={state}/>
            {/* <PlayList /> */}
          {/* </header> */}
        {/* </div> */}
      </Context.Provider>
  );
}

export default App;
