import React, { useState, useCallback } from 'react';
import type { ReactNode } from 'react';
import type { Player, GameState } from '../types';
import {
  GameContext,
  DEFAULT_SETTINGS,
  type GameContextType,
} from './GameContextValue';

export function GameProvider({ children }: { children: ReactNode }) {
  const [gameState, setGameState] = useState<GameState>({
    targetNumber: 0,
    currentNumber: 0,
    players: [],
    currentPlayerIndex: 0,
    clicksThisTurn: 0,
    gameStatus: 'waiting',
    turnCount: 0,
  });

  const initializeGame = useCallback((playerNames: string[]) => {
    const targetNumber = Math.floor(
      Math.random() *
        (DEFAULT_SETTINGS.maxTargetNumber -
          DEFAULT_SETTINGS.minTargetNumber +
          1) +
        DEFAULT_SETTINGS.minTargetNumber
    );

    const players: Player[] = playerNames.map((name, index) => ({
      id: `player-${index}`,
      name,
      isCurrentTurn: index === 0,
    }));

    setGameState({
      targetNumber,
      currentNumber: 0,
      players,
      currentPlayerIndex: 0,
      clicksThisTurn: 0,
      gameStatus: 'playing',
      turnCount: 1,
    });
  }, []);

  const incrementNumber = useCallback(() => {
    if (gameState.gameStatus !== 'playing') return;

    const newClicksThisTurn = gameState.clicksThisTurn + 1;
    const newCurrentNumber = gameState.currentNumber + 1;

    // Check if game is over
    if (newCurrentNumber >= gameState.targetNumber) {
      const currentPlayer = gameState.players[gameState.currentPlayerIndex];
      const otherPlayers = gameState.players.filter(
        (p) => p.id !== currentPlayer.id
      );

      setGameState((prev) => ({
        ...prev,
        currentNumber: newCurrentNumber,
        clicksThisTurn: newClicksThisTurn,
        gameStatus: 'finished',
        loser: currentPlayer,
        winner: otherPlayers[0], // For simplicity, first other player is winner
      }));
      return;
    }

    setGameState((prev) => ({
      ...prev,
      currentNumber: newCurrentNumber,
      clicksThisTurn: newClicksThisTurn,
    }));
  }, [gameState]);

  const nextTurn = useCallback(() => {
    if (gameState.gameStatus !== 'playing') return;
    if (gameState.clicksThisTurn < DEFAULT_SETTINGS.minClicksPerTurn) return;

    const nextPlayerIndex =
      (gameState.currentPlayerIndex + 1) % gameState.players.length;

    setGameState((prev) => ({
      ...prev,
      currentPlayerIndex: nextPlayerIndex,
      clicksThisTurn: 0,
      turnCount: prev.turnCount + 1,
      players: prev.players.map((player, index) => ({
        ...player,
        isCurrentTurn: index === nextPlayerIndex,
      })),
    }));
  }, [gameState]);

  const resetGame = useCallback(() => {
    setGameState({
      targetNumber: 0,
      currentNumber: 0,
      players: [],
      currentPlayerIndex: 0,
      clicksThisTurn: 0,
      gameStatus: 'waiting',
      turnCount: 0,
    });
  }, []);

  const canNextTurn =
    gameState.clicksThisTurn >= DEFAULT_SETTINGS.minClicksPerTurn;
  const isMaxClicksReached =
    gameState.clicksThisTurn >= DEFAULT_SETTINGS.maxClicksPerTurn;
  const currentPlayer = gameState.players[gameState.currentPlayerIndex];

  const value: GameContextType = {
    gameState,
    initializeGame,
    incrementNumber,
    nextTurn,
    resetGame,
    canNextTurn,
    isMaxClicksReached,
    currentPlayer,
    settings: DEFAULT_SETTINGS,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
