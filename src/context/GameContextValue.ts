import { createContext } from 'react';
import type { GameState, Player, GameSettings } from '../types';

export const DEFAULT_SETTINGS: GameSettings = {
  minTargetNumber: 20,
  maxTargetNumber: 50,
  minClicksPerTurn: 1,
  maxClicksPerTurn: 3,
};

export interface GameContextType {
  gameState: GameState;
  initializeGame: (playerNames: string[]) => void;
  incrementNumber: () => void;
  nextTurn: () => void;
  resetGame: () => void;
  canNextTurn: boolean;
  isMaxClicksReached: boolean;
  currentPlayer?: Player;
  settings: GameSettings;
}

export const GameContext = createContext<GameContextType | undefined>(
  undefined
);
