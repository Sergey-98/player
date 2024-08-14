import { 
  DispatchType, 
  State
} from 'types/types';

export function reducer(state: State, action: DispatchType) {
  switch (action.type) {
      case 'updateSrc':
          state.src = action.payload.src;
      return {
          ...state,
      };
      case 'updateArtist':
          state.artist = action.payload.artist;
      return {
          ...state,
      };
      case 'updateTitle':
          state.title = action.payload.title;
          return {
              ...state,
          };
      case 'updatePoster':
          state.poster = action.payload.poster;
          return {
              ...state,
          };
      case 'updateBackPoster':
          state.backPoster = action.payload.backPoster;
          return {
            ...state,
          };
      default:
      return state;
  }
}