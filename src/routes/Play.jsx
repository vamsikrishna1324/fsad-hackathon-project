import React, { useState, useEffect } from 'react';
import '../styles/Play.css';

const Play = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedGame, setSelectedGame] = useState(null);
  const [gameSession, setGameSession] = useState(null);
  const [friends] = useState([
    { id: 1, name: 'ProGamer99', online: true, avatar: '👾' },
    { id: 2, name: 'ChessMaster', online: true, avatar: '♟' },
    { id: 3, name: 'PokerFace', online: false, avatar: '🃏' },
  ]);
  const [chatMessages, setChatMessages] = useState([
    { user: 'System', text: 'Welcome to PROARENA!', time: '12:00 PM' }
  ]);
  const [gameProgress, setGameProgress] = useState({});
  const [localRooms, setLocalRooms] = useState([]);

  const games = [
    {
      id: 1,
      title: 'Chess',
      category: 'strategy',
      players: '2',
      thumbnail: '/chess.jpg',
      embedUrl: 'https://www.chess.com/play/computer',
      multiplayer: true,
      rules: 'Standard chess rules. Checkmate your opponent to win!'
    },
    {
      id: 2,
      title: 'Poker',
      category: 'card',
      players: '2-8',
      thumbnail: '/poker.jpg',
      embedUrl: 'https://www.pokernow.club/',
      multiplayer: true,
      rules: 'Texas Holdem rules. The best 5-card hand wins!'
    },
    {
      id: 3,
      title: 'Solitaire',
      category: 'card',
      players: '1',
      thumbnail: '/sol.jpg',
      embedUrl: 'https://www.solitaire.com/',
      multiplayer: false,
      rules: 'Classic solitaire. Move all cards to the foundation piles.'
    },
    {
      id: 4,
      title: '2048',
      category: 'puzzle',
      players: '1',
      thumbnail: '/2048.jpg',
      embedUrl: 'https://play2048.co/',
      multiplayer: false,
      rules: 'Combine tiles to reach 2048. Use arrow keys to move.'
    },
    {
      id: 5,
      title: 'Crossword',
      category: 'puzzle',
      players: '1',
      thumbnail: '/cross.jpg',
      embedUrl: 'https://www.nytimes.com/crosswords',
      multiplayer: false,
      rules: 'Fill in the grid with words matching the clues.'
    },
    {
      id: 6,
      title: 'Sudoku',
      category: 'puzzle',
      players: '1',
      thumbnail: '/sudoku.jpg',
      embedUrl: 'https://sudoku.com/',
      multiplayer: false,
      rules: 'Fill the grid so each row, column and 3x3 box contains 1-9.'
    }
  ];

  useEffect(() => {
    const savedProgress = JSON.parse(localStorage.getItem('gameProgress')) || {};
    setGameProgress(savedProgress);

    const savedRooms = JSON.parse(localStorage.getItem('localRooms')) || [];
    setLocalRooms(savedRooms);
  }, []);

  useEffect(() => {
    localStorage.setItem('gameProgress', JSON.stringify(gameProgress));
    localStorage.setItem('localRooms', JSON.stringify(localRooms));
  }, [gameProgress, localRooms]);

  const startGameSession = (game) => {
    if (game.multiplayer) {
      const roomCode = Math.random().toString(36).substring(2, 6).toUpperCase();
      const newRoom = {
        code: roomCode,
        game,
        players: ['You'],
        started: false,
        createdAt: new Date().toISOString()
      };
      setLocalRooms([...localRooms, newRoom]);
      setGameSession(newRoom);
    } else {
      setGameSession({
        game,
        started: true,
        progress: gameProgress[game.id] || 0
      });
    }
    setSelectedGame(null);
  };

  const joinGameRoom = (roomCode) => {
    const room = localRooms.find(r => r.code === roomCode);
    if (room) {
      const updatedRoom = {
        ...room,
        players: [...room.players, 'Friend']
      };
      setLocalRooms(localRooms.map(r => r.code === roomCode ? updatedRoom : r));
      setGameSession(updatedRoom);
    }
  };

  const inviteFriend = (friendId) => {
    const friend = friends.find(f => f.id === friendId);
    alert(`Invitation sent to ${friend.name}`);
  };

  const sendChatMessage = (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    if (message.trim()) {
      const newMessage = {
        user: 'You',
        text: message,
        time: new Date().toLocaleTimeString()
      };
      setChatMessages([...chatMessages, newMessage]);
      e.target.reset();
    }
  };

  const saveGameProgress = (gameId, progress) => {
    setGameProgress({
      ...gameProgress,
      [gameId]: progress
    });
  };

  const endGameSession = () => {
    if (gameSession?.game?.multiplayer) {
      setLocalRooms(localRooms.filter(r => r.code !== gameSession.code));
    }
    setGameSession(null);
  };

  return (
    <div className="play-page">
      {!gameSession && (
        <>
          <div className="play-header">
            <h1>🎮 PROARENA Game Lobby</h1>
            <div className="game-categories">
              {['all', 'strategy', 'card', 'puzzle'].map(cat => (
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
                          <span className={`game-type ${game.multiplayer ? 'multiplayer' : 'singleplayer'}`}>
                            {game.multiplayer ? 'Multiplayer' : 'Single Player'}
                          </span>
                          {gameProgress[game.id] && !game.multiplayer && (
                            <span className="game-progress">Progress: {gameProgress[game.id]}%</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {localRooms.length > 0 && (
                <div className="available-rooms">
                  <h3>Available Multiplayer Rooms</h3>
                  <div className="room-list">
                    {localRooms.map(room => (
                      <div key={room.code} className="room-card">
                        <div className="room-info">
                          <img src={room.game.thumbnail} alt={room.game.title} />
                          <div>
                            <h4>{room.game.title}</h4>
                            <p>Players: {room.players.length}/{room.game.players.split('-')[1] || 2}</p>
                          </div>
                        </div>
                        <button 
                          onClick={() => joinGameRoom(room.code)}
                          disabled={room.players.length >= parseInt(room.game.players.split('-')[1] || 2)}
                        >
                          Join
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
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
                      <button className="invite-button" onClick={() => inviteFriend(friend.id)}>
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
                  <input type="text" name="message" placeholder="Type a message..." autoComplete="off" />
                  <button type="submit">Send</button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}

      {selectedGame && !gameSession && (
        <div className="game-modal">
          <div className="modal-content">
            <h2>{selectedGame.title}</h2>
            <img src={selectedGame.thumbnail} alt={selectedGame.title} className="modal-thumbnail" />
            <p className="game-description">{selectedGame.rules}</p>
            <div className="modal-actions">
              <button className="start-button" onClick={() => startGameSession(selectedGame)}>Start Game</button>
              <button className="cancel-button" onClick={() => setSelectedGame(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {gameSession && (
        <div className="game-session">
          <div className="game-header">
            <h2>Now Playing: {gameSession.game.title}</h2>
            <button onClick={endGameSession}>End Session</button>
          </div>
          <iframe 
            title={gameSession.game.title}
            src={gameSession.game.embedUrl}
            className="game-frame"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Play;
