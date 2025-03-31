import React, { useState, useEffect } from 'react';
import '../styles/Play.css';

const Play = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedGame, setSelectedGame] = useState(null);
  const [gameSession, setGameSession] = useState(null);
  const [friends] = useState([
    { id: 1, name: 'ProGamer99', online: true, avatar: '👾' },
    { id: 2, name: 'ChessMaster', online: true, avatar: '♟️' },
    { id: 3, name: 'PokerFace', online: false, avatar: '🃏' },
  ]);
  const [chatMessages, setChatMessages] = useState([
    { user: 'System', text: 'Welcome to PROARENA!', time: '12:00 PM' }
  ]);

  // 20+ games with embedded playable URLs
  const games = [
    {
      id: 1,
      title: 'Battle Royale',
      category: 'action',
      players: '2-100',
      thumbnail: 'https://img.icons8.com/color/96/000000/battle.png',
      embedUrl: 'https://i.simmer.io/@StaticPH/battle-royale',
      multiplayer: true
    },
    {
      id: 2,
      title: 'Chess',
      category: 'strategy',
      players: '2',
      thumbnail: 'https://img.icons8.com/color/96/000000/chess.png',
      embedUrl: 'https://www.chess.com/play/computer',
      multiplayer: true
    },
    {
      id: 3,
      title: 'Texas Holdem',
      category: 'card',
      players: '2-8',
      thumbnail: 'https://img.icons8.com/color/96/000000/poker.png',
      embedUrl: 'https://www.pokernow.club/',
      multiplayer: true
    },
    // Add 17 more games...
    {
      id: 4,
      title: '8-Ball Pool',
      category: 'sports',
      players: '2',
      thumbnail: 'https://img.icons8.com/color/96/000000/billiards.png',
      embedUrl: 'https://www.miniclip.com/games/8-ball-pool-multiplayer/en/',
      multiplayer: true
    },
    {
      id: 5,
      title: 'Tetris',
      category: 'puzzle',
      players: '1-2',
      thumbnail: 'https://img.icons8.com/color/96/000000/tetris.png',
      embedUrl: 'https://tetris.com/play-tetris',
      multiplayer: true
    }
  ];

  const startGameSession = (game) => {
    setGameSession({
      game,
      code: Math.random().toString(36).substring(2, 8).toUpperCase(),
      players: [{ id: 1, name: 'You', ready: true }],
      started: false
    });
  };

  const inviteFriend = (friendId) => {
    alert(`Invitation sent to ${friends.find(f => f.id === friendId).name}`);
    // In a real app: Send WebSocket invitation
  };

  const sendChatMessage = (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    if (message.trim()) {
      setChatMessages([...chatMessages, 
        { user: 'You', text: message, time: new Date().toLocaleTimeString() }
      ]);
      e.target.reset();
    }
  };

  return (
    <div className="play-page">
      {/* Game Lobby */}
      {!gameSession && (
        <>
          <div className="play-header">
            <h1>🎮 PROARENA Game Lobby</h1>
            <div className="game-categories">
              {['all', 'action', 'strategy', 'card', 'puzzle', 'sports'].map(cat => (
                <button
                  key={cat}
                  className={activeCategory === cat ? 'active' : ''}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="play-container">
            <div className="game-lobby">
              <div className="game-grid">
                {games
                  .filter(game => activeCategory === 'all' || game.category === activeCategory)
                  .map(game => (
                    <div key={game.id} className="game-card" onClick={() => setSelectedGame(game)}>
                      <img src={game.thumbnail} alt={game.title} />
                      <div className="game-info">
                        <h3>{game.title}</h3>
                        <div className="game-meta">
                          <span>👥 {game.players}</span>
                          <span className={`multiplayer-tag ${game.multiplayer ? 'active' : ''}`}>
                            {game.multiplayer ? 'Multiplayer' : 'Single Player'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="social-sidebar">
              <div className="friends-list">
                <h3>👥 Online Friends ({friends.filter(f => f.online).length})</h3>
                {friends.map(friend => (
                  <div key={friend.id} className="friend-item">
                    <span className="friend-avatar">{friend.avatar}</span>
                    <span className="friend-name">{friend.name}</span>
                    <span className={`status-dot ${friend.online ? 'online' : 'offline'}`}></span>
                    {friend.online && (
                      <button 
                        className="invite-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          inviteFriend(friend.id);
                        }}
                      >
                        Invite
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div className="chat-box">
                <h3>💬 Group Chat</h3>
                <div className="chat-messages">
                  {chatMessages.map((msg, i) => (
                    <div key={i} className="message">
                      <strong>{msg.user}:</strong> {msg.text}
                      <span className="message-time">{msg.time}</span>
                    </div>
                  ))}
                </div>
                <form onSubmit={sendChatMessage} className="chat-input">
                  <input 
                    type="text" 
                    name="message" 
                    placeholder="Type a message..." 
                    autoComplete="off"
                  />
                  <button type="submit">Send</button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Game Selection Modal */}
      {selectedGame && !gameSession && (
        <div className="game-modal">
          <div className="modal-content">
            <h2>{selectedGame.title}</h2>
            <img src={selectedGame.thumbnail} alt={selectedGame.title} className="modal-thumbnail" />
            <p>Players: {selectedGame.players}</p>
            
            <div className="modal-actions">
              {selectedGame.multiplayer ? (
                <>
                  <button className="create-room" onClick={() => startGameSession(selectedGame)}>
                    🎮 Create Private Room
                  </button>
                  <button className="quick-play">
                    ⚡ Quick Play (Random Opponent)
                  </button>
                </>
              ) : (
                <button className="play-solo" onClick={() => setGameSession({ game: selectedGame, started: true })}>
                  🕹️ Play Solo
                </button>
              )}
              <button className="close-modal" onClick={() => setSelectedGame(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Active Game Session */}
      {gameSession && (
        <div className="game-session">
          <div className="session-header">
            <h2>Playing: {gameSession.game.title}</h2>
            {gameSession.code && (
              <div className="session-code">
                Room Code: <strong>{gameSession.code}</strong>
                <button onClick={() => navigator.clipboard.writeText(gameSession.code)}>
                  Copy
                </button>
              </div>
            )}
            <button 
              className="leave-game"
              onClick={() => setGameSession(null)}
            >
              Leave Game
            </button>
          </div>

          {!gameSession.started ? (
            <div className="lobby-screen">
              <h3>👥 Waiting for players...</h3>
              <div className="player-list">
                {gameSession.players.map(player => (
                  <div key={player.id} className="player-item">
                    <span className="player-status">{player.ready ? '✅' : '❌'}</span>
                    {player.name}
                  </div>
                ))}
              </div>
              <button 
                className="start-game"
                onClick={() => setGameSession({...gameSession, started: true})}
              >
                Start Game
              </button>
            </div>
          ) : (
            <div className="game-embed-container">
              <iframe 
                src={gameSession.game.embedUrl} 
                title={gameSession.game.title}
                allowFullScreen
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Play;