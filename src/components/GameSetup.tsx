import { useState } from 'react';
import { useGame } from '../hooks/useGame';
import './GameSetup.css';

interface GameSetupProps {
  onGameStart: () => void;
}

export function GameSetup({ onGameStart }: GameSetupProps) {
  const { initializeGame } = useGame();
  const [playerNames, setPlayerNames] = useState(['플레이어 A', '플레이어 B']);
  const [error, setError] = useState('');

  const handlePlayerNameChange = (index: number, name: string) => {
    const newNames = [...playerNames];
    newNames[index] = name;
    setPlayerNames(newNames);
    setError('');
  };

  const addPlayer = () => {
    if (playerNames.length < 6) {
      setPlayerNames([
        ...playerNames,
        `플레이어 ${String.fromCharCode(65 + playerNames.length)}`,
      ]);
    }
  };

  const removePlayer = (index: number) => {
    if (playerNames.length > 2) {
      const newNames = playerNames.filter((_, i) => i !== index);
      setPlayerNames(newNames);
    }
  };

  const handleStartGame = () => {
    const validNames = playerNames.filter((name) => name.trim() !== '');

    if (validNames.length < 2) {
      setError('최소 2명의 플레이어가 필요합니다.');
      return;
    }

    if (validNames.length !== new Set(validNames).size) {
      setError('플레이어 이름은 중복될 수 없습니다.');
      return;
    }

    initializeGame(validNames);
    onGameStart();
  };

  return (
    <div className="game-setup">
      <div className="setup-header">
        <h1>🎲 랜덤 31게임</h1>
        <p>플레이어를 설정하고 게임을 시작하세요!</p>
      </div>

      <div className="setup-content">
        <div className="player-list">
          <h3>플레이어 설정</h3>
          {playerNames.map((name, index) => (
            <div key={index} className="player-input">
              <input
                type="text"
                value={name}
                onChange={(e) => handlePlayerNameChange(index, e.target.value)}
                placeholder={`플레이어 ${String.fromCharCode(65 + index)}`}
                maxLength={10}
              />
              {playerNames.length > 2 && (
                <button
                  className="remove-player"
                  onClick={() => removePlayer(index)}
                  type="button"
                >
                  ✕
                </button>
              )}
            </div>
          ))}

          {playerNames.length < 6 && (
            <button className="add-player" onClick={addPlayer} type="button">
              + 플레이어 추가
            </button>
          )}
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="game-rules">
          <h3>게임 규칙</h3>
          <ul>
            <li>목표 숫자는 20~50 사이에서 랜덤으로 설정됩니다</li>
            <li>각 턴에서 + 버튼을 1~3회 클릭할 수 있습니다</li>
            <li>목표 숫자에 도달한 플레이어가 패배합니다</li>
            <li>최소 2명, 최대 6명까지 플레이 가능합니다</li>
          </ul>
        </div>

        <button
          className="start-game-button"
          onClick={handleStartGame}
          disabled={playerNames.length < 2}
        >
          게임 시작!
        </button>
      </div>
    </div>
  );
}
