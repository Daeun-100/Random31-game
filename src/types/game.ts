// Player interface
export interface Player {
  id: string;
  name: string;
  isCurrentTurn: boolean;
}

// Game state interface
export interface GameState {
  targetNumber: number;
  currentNumber: number;
  players: Player[];
  currentPlayerIndex: number;
  clicksThisTurn: number;
  gameStatus: 'waiting' | 'playing' | 'finished';
  winner?: Player;
  loser?: Player;
  turnCount: number;
}

// Game settings interface
export interface GameSettings {
  minTargetNumber: number;
  maxTargetNumber: number;
  minClicksPerTurn: number;
  maxClicksPerTurn: number;
}
