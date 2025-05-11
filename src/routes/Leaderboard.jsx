import React, { useState } from 'react';
import { FaTrophy, FaCrown, FaMedal, FaSearch } from 'react-icons/fa';
import '../styles/Leaderboard.css';

const Leaderboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [timeFilter, setTimeFilter] = useState('all-time');

  const leaderboardData = [
    { rank: 1, name: 'ProGamer99', avatar: '👑', score: 12500, matches: 150, wins: 128, winRate: '85%', streak: 12, favoriteGame: 'Valorant' },
    { rank: 2, name: 'ChessMaster', avatar: '♟', score: 11800, matches: 210, wins: 185, winRate: '88%', streak: 8, favoriteGame: 'Chess' },
    { rank: 3, name: 'ApexPredator', avatar: '🦖', score: 11200, matches: 95, wins: 82, winRate: '86%', streak: 5, favoriteGame: 'Apex Legends' },
    { rank: 4, name: 'FortniteKing', avatar: '🏰', score: 10800, matches: 320, wins: 275, winRate: '86%', streak: 3, favoriteGame: 'Fortnite' },
    { rank: 5, name: 'DotaWizard', avatar: '🧙', score: 10500, matches: 180, wins: 155, winRate: '86%', streak: 7, favoriteGame: 'Dota 2' },
    { rank: 6, name: 'CSGOSniper', avatar: '🎯', score: 9800, matches: 240, wins: 210, winRate: '88%', streak: 10, favoriteGame: 'CS:GO' },
    { rank: 7, name: 'LOLQueen', avatar: '👸', score: 9500, matches: 190, wins: 165, winRate: '87%', streak: 4, favoriteGame: 'League of Legends' },
    { rank: 8, name: 'PUBGChamp', avatar: '🏆', score: 9200, matches: 110, wins: 95, winRate: '86%', streak: 6, favoriteGame: 'PUBG' },
    { rank: 9, name: 'RocketLegend', avatar: '🚀', score: 8900, matches: 175, wins: 150, winRate: '86%', streak: 2, favoriteGame: 'Rocket League' },
    { rank: 10, name: 'OverwatchPro', avatar: '🛡', score: 8600, matches: 200, wins: 175, winRate: '88%', streak: 9, favoriteGame: 'Overwatch' }
  ];

  const filteredPlayers = leaderboardData.filter(player =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    player.favoriteGame.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getMedalIcon = (rank) => {
    switch (rank) {
      case 1: return <FaCrown className="gold" />;
      case 2: return <FaMedal className="silver" />;
      case 3: return <FaMedal className="bronze" />;
      default: return <span className="rank-number">{rank}</span>;
    }
  };

  return (
    <div className="leaderboard-page">
      <div className="leaderboard-header">
        <h1>
          <FaTrophy className="trophy-icon" /> PROARENA Leaderboard
        </h1>
        <p>Top players across all tournaments and games</p>
      </div>

      <div className="leaderboard-controls">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search players or games..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-container">
          <select value={timeFilter} onChange={(e) => setTimeFilter(e.target.value)}>
            <option value="all-time">All Time</option>
            <option value="monthly">This Month</option>
            <option value="weekly">This Week</option>
            <option value="daily">Today</option>
          </select>
        </div>
      </div>

      <div className="leaderboard-container">
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Player</th>
              <th>Score</th>
              <th>Matches</th>
              <th>Wins</th>
              <th>Win Rate</th>
              <th>Streak</th>
              <th>Favorite Game</th>
            </tr>
          </thead>
          <tbody>
            {filteredPlayers.map((player) => (
              <tr key={player.rank} className={player.rank <= 3 ? `top-${player.rank}` : ''}>
                <td className="rank-cell">
                  {getMedalIcon(player.rank)}
                </td>
                <td className="player-cell">
                  <span className="player-avatar">{player.avatar}</span>
                  <span className="player-name">{player.name}</span>
                </td>
                <td>{player.score.toLocaleString()}</td>
                <td>{player.matches}</td>
                <td>{player.wins}</td>
                <td>{player.winRate}</td>
                <td className={`streak-${player.streak > 5 ? 'hot' : 'normal'}`}>
                  {player.streak} {player.streak > 5 && '🔥'}
                </td>
                <td>{player.favoriteGame}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="leaderboard-footer">
        <button className="view-more-btn">View Full Leaderboard</button>
        <p className="login-prompt">
          Sign in to track your stats and climb the leaderboard!
        </p>
      </div>
    </div>
  );
};

export default Leaderboard;
