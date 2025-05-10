import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Login from './routes/Login';
import Signup from './routes/Signup';
import Dashboard from './routes/Dashboard';
import Leaderboard from './routes/Leaderboard';
import Groups from './routes/Groups';
import GamingGear from './routes/GamingGear';
import Business from './routes/Business';
import More from './routes/More';
import CreateTournament from './routes/CreateTournament';
import Play from './routes/Play';
import TournamentRegister from './routes/TournamentRegister'; // Correct import

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/register/:tournamentId" element={<TournamentRegister />} /> {/* Dynamic route */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/groups" element={<Groups />} />
      <Route path="/gaming-gear" element={<GamingGear />} />
      <Route path="/business" element={<Business />} />
      <Route path="/more" element={<More />} />
      <Route path="/create-tournament" element={<CreateTournament />} />
      <Route path="/play" element={<Play />} />
    </Routes>
  );
};

export default App;