export type Props = {
  children?: React.ReactNode;
  placeholder?: React.ReactNode;
  onClick?: () => void;
};

export type State = {
  src?: string, 
  artist?: string, 
  title?: string, 
  poster?: string, 
  backPoster?: string
}

export type DispatchType = {
  type?: string;
  payload: State;
};