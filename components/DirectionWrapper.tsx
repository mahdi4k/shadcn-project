'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import { DirectionProvider } from '@radix-ui/react-direction';

type Direction = 'ltr' | 'rtl';

interface DirectionContextType {
  dir: Direction;
  toggleDir: () => void;
}

const DirectionContext = createContext<DirectionContextType>({
  dir: 'rtl',
  toggleDir: () => {},
});

export const useDirection = () => useContext(DirectionContext);

export default function DirectionWrapper({ children }: { children: ReactNode }) {
  const [dir, setDir] = useState<Direction>('rtl');

  useEffect(() => {
    const stored = localStorage.getItem('dir') as Direction;
    if (stored) setDir(stored);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('dir', dir);
    localStorage.setItem('dir', dir);
  }, [dir]);

  const toggleDir = () => {
    setDir((prev) => (prev === 'ltr' ? 'rtl' : 'ltr'));
  };

  return (
    <DirectionContext.Provider value={{ dir, toggleDir }}>
      <DirectionProvider dir={dir}>{children}</DirectionProvider>
    </DirectionContext.Provider>
  );
}
