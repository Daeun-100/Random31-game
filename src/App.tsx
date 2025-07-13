import React, { useState } from 'react';
import { GameProvider } from './context/GameContext';
import { GameSetup } from './components/GameSetup';
import { GameScreen } from './components/GameScreen';
import './App.css';

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const handleGameStart = () => {
    setGameStarted(true);
  };

  const handleBackToSetup = () => {
    setGameStarted(false);
  };

  return (
    <GameProvider>
      <div className="App">
        {!gameStarted ? (
          <GameSetup onGameStart={handleGameStart} />
        ) : (
          <div className="game-container">
            <GameScreen onBackToSetup={handleBackToSetup} />
            <button className="back-button" onClick={handleBackToSetup}>
              ← 설정으로 돌아가기
            </button>
          </div>
        )}
      </div>
    </GameProvider>
  );
}

export default App;
