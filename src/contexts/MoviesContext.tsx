import { createContext, useState, ReactNode } from 'react';

type MovieContextProviderProps = {
  children?: ReactNode;
}

type MoviesContextType = {
  selectedGenreId: number;
  handleClickButton: (id: number) => void;
}

export const MoviesContext = createContext({} as MoviesContextType);

export function MoviesContextProvider(props: MovieContextProviderProps) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <MoviesContext.Provider value={{ selectedGenreId, handleClickButton }}>
      {props.children}
    </MoviesContext.Provider>
  )
}
