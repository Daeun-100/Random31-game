import React from 'react';
import { useGame } from '../hooks/useGame';
import './GameScreen.css';

interface GameScreenProps {
  onBackToSetup?: () => void;
}

export function GameScreen({ onBackToSetup }: GameScreenProps) {
  const {
    gameState,
    incrementNumber,
    nextTurn,
    canNextTurn,
    isMaxClicksReached,
    currentPlayer,
    resetGame,
  } = useGame();

  // Auto-next turn when max clicks reached
  React.useEffect(() => {
    if (isMaxClicksReached) {
      const timer = setTimeout(() => {
        nextTurn();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isMaxClicksReached, nextTurn]);

  const handleIncrementClick = () => {
    if (gameState.gameStatus === 'playing' && !isMaxClicksReached) {
      incrementNumber();
    }
  };

  const handleNextTurnClick = () => {
    if (canNextTurn) {
      nextTurn();
    }
  };

  const handleRestartGame = () => {
    resetGame();
    if (onBackToSetup) {
      onBackToSetup();
    }
  };

  if (gameState.gameStatus === 'waiting') {
    return <div className="game-screen">게임을 시작해주세요.</div>;
  }

  if (gameState.gameStatus === 'finished') {
    return (
      <div className="game-screen">
        <div className="game-over">
          <h2>게임 종료!</h2>
          <p>패배자: {gameState.loser?.name}</p>
          <p>승자: {gameState.winner?.name}</p>
          <p>최종 숫자: {gameState.currentNumber}</p>
          <p>목표 숫자: {gameState.targetNumber}</p>
          <button className="restart-button" onClick={handleRestartGame}>
            새 게임 시작
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="game-screen">
      {/* Header */}
      <div className="game-header">
        <div className="dice-icon">🎲</div>
        <div className="game-title">🎲 랜덤 31게임</div>
        <div className="dice-icon">🎲</div>
      </div>

      <div className="target-number">목표 숫자: {gameState.targetNumber}</div>

      {/* Current Number Display */}
      <div className="number-display">
        <div className="number-circle">
          <div className="current-number">{gameState.currentNumber}</div>
          <div className="number-label">현재 숫자</div>
        </div>
      </div>

      {/* Player Turn Indicator */}
      <div className="player-turn">
        <div className="turn-title">{currentPlayer?.name}의 차례</div>
        <div className="turn-instruction">1~3회 클릭 후 다음으로 넘기기</div>
      </div>

      {/* Progress Indicator */}
      <div className="progress-indicator">
        {[1, 2, 3].map((click) => (
          <div
            key={click}
            className={`progress-dot ${
              click <= gameState.clicksThisTurn ? 'active' : ''
            }`}
          />
        ))}
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button
          className={`increment-button ${isMaxClicksReached ? 'disabled' : ''}`}
          onClick={handleIncrementClick}
          disabled={isMaxClicksReached}
        >
          +
        </button>

        <div className="button-label">숫자 증가 (1~3회)</div>

        <button
          className={`next-turn-button ${!canNextTurn ? 'disabled' : ''}`}
          onClick={handleNextTurnClick}
          disabled={!canNextTurn}
        >
          다음으로 넘기기
        </button>
      </div>

      {/* Game Info */}
      <div className="game-info">
        <div className="turn-counter">턴: {gameState.turnCount}</div>
        <div className="game-rule">목표 숫자에 도달하면 패배!</div>
      </div>
    </div>
  );
}
