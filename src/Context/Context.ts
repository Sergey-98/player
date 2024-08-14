import React, { Dispatch, SetStateAction } from 'react';
import { 
  State, 
  DispatchType,
} from '../types/types';


type PropsP = {
    state: State;
    dispatch: Dispatch<DispatchType>;
  };

  export const Context = React.createContext<PropsP>({
    state: { 
      src: '', 
      artist: '', 
      title: '', 
      poster: '', 
      backPoster: ''
    },
    dispatch: () => {}
  });