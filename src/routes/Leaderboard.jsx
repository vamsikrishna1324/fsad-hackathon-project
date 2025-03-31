import React from 'react';
import '../styles/Leaderboard.css';

const Leaderboard = () => {
  // Sample data for the leaderboard
  const leaderboardData = [
    { rank: 1, name: 'Player1', score: 2500, matches: 50, wins: 45 },
    { rank: 2, name: 'Player2', score: 2400, matches: 48, wins: 42 },
    { rank: 3, name: 'Player3', score: 2300, matches: 47, wins: 40 },
    { rank: 4, name: 'Player4', score: 2200, matches: 45, wins: 38 },
    { rank: 5, name: 'Player5', score: 2100, matches: 43, wins: 36 },
  ];

  return (
    <div className="leaderboard-page" data-aos="fade-up">
      <h1 data-aos="fade-down">PROARENA Leaderboard</h1>
      <div className="leaderboard-container">
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Player</th>
              <th>Score</th>
              <th>Matches</th>
              <th>Wins</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((player) => (
              <tr key={player.rank}>
                <td>{player.rank}</td>
                <td>{player.name}</td>
                <td>{player.score}</td>
                <td>{player.matches}</td>
                <td>{player.wins}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;