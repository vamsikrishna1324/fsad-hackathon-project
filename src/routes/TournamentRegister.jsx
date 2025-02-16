import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/Register.css";

const tournaments = [
  {
    id: 1,
    title: "Valorant Championship",
    date: "15 Sept 2023",
    video: "https://drive.google.com/file/d/1l_QFvnLETJFT1_IiZIKlE8-STtm7oumw/view?usp=drive_link",
    prize: "$50,000",
    format: "5v5",
    description: "The ultimate Valorant showdown featuring top teams worldwide.",
    rules: ["Best of 3 matches", "No restricted agents", "Single elimination"],
    prizes: ["1st: $30,000", "2nd: $15,000", "3rd: $5,000"],
    schedule: ["Reg Ends: 10 Sept", "Group Stage: 12 Sept", "Finals: 15 Sept"]
  },
  {
    id: 2,
    title: "CS:GO Showdown",
    date: "16 Sept 2023",
    video: "/videos/CSGO-Showdown.mp4",
    prize: "$50,000",
    format: "5v5",
    description: "An intense Counter-Strike: Global Offensive battle where elite teams compete for supremacy.",
    rules: ["Best of 3 matches", "No restricted agents", "Single elimination"],
    prizes: ["1st: $30,000", "2nd: $15,000", "3rd: $5,000"],
    schedule: ["Reg Ends: 10 Sept", "Group Stage: 12 Sept", "Finals: 15 Sept"]
  },
  {
    id: 3,
    title: "Fortnite Battle Royale",
    date: "17 Sept 2023",
    video: "/videos/Fortnite-Battle.mp4",
    prize: "$50,000",
    format: "5v5",
    description: "A high-stakes Fortnite competition featuring the best builders and shooters in a last-man-standing showdown.",
    rules: ["Best of 3 matches", "No restricted agents", "Single elimination"],
    prizes: ["1st: $30,000", "2nd: $15,000", "3rd: $5,000"],
    schedule: ["Reg Ends: 10 Sept", "Group Stage: 12 Sept", "Finals: 15 Sept"]
  },
  {
    id: 4,
    title: "League of Legends Clash",
    date: "19 Sept 2023",
    video: "https://drive.google.com/file/d/12ZQZ4Evd2ctK_oyU_G6aaeRLhlWnRaSf/view?usp=drive_link",
    prize: "$50,000",
    format: "5v5",
    description: "A strategic face-off between top-tier League of Legends teams, fighting for glory on the Rift.",
    rules: ["Best of 3 matches", "No restricted agents", "Single elimination"],
    prizes: ["1st: $30,000", "2nd: $15,000", "3rd: $5,000"],
    schedule: ["Reg Ends: 10 Sept", "Group Stage: 12 Sept", "Finals: 15 Sept"]
  },
  {
    id: 5,
    title: "Delta Force Tournament",
    date: "20 Sept 2023",
    video: "/videos/delta.mp4",
    prize: "$50,000",
    format: "5v5",
    description: "A tactical warfare competition in Delta Force, where precision and teamwork decide the champion.",
    rules: ["Best of 3 matches", "No restricted agents", "Single elimination"],
    prizes: ["1st: $30,000", "2nd: $15,000", "3rd: $5,000"],
    schedule: ["Reg Ends: 10 Sept", "Group Stage: 12 Sept", "Finals: 15 Sept"]
  },
  {
    id: 6,
    title: "Apex Legends Showdown",
    date: "21 Sept 2023",
    video: "/videos/apex.mp4",
    prize: "$50,000",
    format: "5v5",
    description: "A fast-paced Apex Legends tournament where squads battle to be the last ones standing in the Outlands.",
    rules: ["Best of 3 matches", "No restricted agents", "Single elimination"],
    prizes: ["1st: $30,000", "2nd: $15,000", "3rd: $5,000"],
    schedule: ["Reg Ends: 10 Sept", "Group Stage: 12 Sept", "Finals: 15 Sept"]
  },
  {
    id: 7,
    title: "Overwatch 2 Tournament",
    date: "22 Sept 2023",
    video: "https://drive.google.com/file/d/1aqXGAO_HrlvrZSO6wG_AlVChWhOtSayK/view?usp=drive_link",
    prize: "$50,000",
    format: "5v5",
    description: "A dynamic Overwatch 2 contest where teams showcase skill, coordination, and hero mastery.",
    rules: ["Best of 3 matches", "No restricted agents", "Single elimination"],
    prizes: ["1st: $30,000", "2nd: $15,000", "3rd: $5,000"],
    schedule: ["Reg Ends: 10 Sept", "Group Stage: 12 Sept", "Finals: 15 Sept"]
  },
  {
    id: 8,
    title: "PUBG PC Challenge",
    date: "23 Sept 2023",
    video: "https://drive.google.com/file/d/1L-VytpQgX5ZkvLzDiFpFTpSM8w9b5LPJ/view?usp=drive_link",
    prize: "$50,000",
    format: "5v5",
    description: "A thrilling PUBG PC competition where survival instincts and sharpshooting skills determine the winner.",
    rules: ["Best of 3 matches", "No restricted agents", "Single elimination"],
    prizes: ["1st: $30,000", "2nd: $15,000", "3rd: $5,000"],
    schedule: ["Reg Ends: 10 Sept", "Group Stage: 12 Sept", "Finals: 15 Sept"]
  },
  {
    id: 9,
    title: "Marvel Rivals Tournament",
    date: "24 Sept 2023",
    video: "https://drive.google.com/file/d/1sycHvNcf37tu8Q_Ny048d15Gq-NI1qZk/view?usp=drive_link",
    prize: "$50,000",
    format: "5v5",
    description: " A spectacular battle in Marvel Rivals, where iconic heroes and villains clash in team-based combat.",
    rules: ["Best of 3 matches", "No restricted agents", "Single elimination"],
    prizes: ["1st: $30,000", "2nd: $15,000", "3rd: $5,000"],
    schedule: ["Reg Ends: 10 Sept", "Group Stage: 12 Sept", "Finals: 15 Sept"]
  }
];


const TournamentRegister = () => {
  const { tournamentId } = useParams();
  const tournament = tournaments.find((t) => t.id === parseInt(tournamentId));

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    region: "",
  });

  const [isMuted, setIsMuted] = useState(true); // State to control muted audio

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registration submitted for ${tournament.title}!`);
  };

  const handlePlayAudio = () => {
    setIsMuted(false); // Unmute the video
  };

  if (!tournament)
    return <div className="p-8 text-red-500 text-xl">Tournament not found!</div>;

  return (
    <div className="register-container">
      {/* Video Background */}
      <div className="video-background">
        <video autoPlay loop muted={isMuted} className="video-content">
          <source src={tournament.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
        {isMuted && (
          <button onClick={handlePlayAudio} className="play-audio-btn">
            Play Audio
          </button>
        )}
      </div>

      {/* Main Content */}
      <div className="content">
        <h1 className="tournament-title">{tournament.title}</h1>

        <div className="tournament-details">
          <div className="detail-item">
            <p className="detail-label">Date</p>
            <p className="detail-value">{tournament.date}</p>
          </div>
          <div className="detail-item">
            <p className="detail-label">Prize Pool</p>
            <p className="detail-value">{tournament.prize}</p>
          </div>
          <div className="detail-item">
            <p className="detail-label">Format</p>
            <p className="detail-value">{tournament.format}</p>
          </div>
        </div>

        {/* Registration Form */}
        <div className="registration-form">
          <h2 className="form-title">Register for Tournament</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>In-Game Username</label>
              <input
                type="text"
                required
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label>Region</label>
              <select
                required
                value={formData.region}
                onChange={(e) =>
                  setFormData({ ...formData, region: e.target.value })
                }
              >
                <option value="">Select Region</option>
                <option value="na">North America</option>
                <option value="eu">Europe</option>
                <option value="asia">Asia</option>
                <option value="other">Other</option>
              </select>
            </div>

            <button type="submit" className="submit-btn">
              Complete Registration
            </button>
          </form>
        </div>

        {/* Tournament Information */}
        <div className="tournament-info">
          <div className="info-card">
            <h3>About the Tournament</h3>
            <p>{tournament.description}</p>
          </div>

          <div className="info-card">
            <h3>Rules</h3>
            <ul>
              {tournament.rules.map((rule, i) => (
                <li key={i}>{rule}</li>
              ))}
            </ul>
          </div>

          <div className="info-card">
            <h3>Prizes</h3>
            <ul>
              {tournament.prizes.map((prize, i) => (
                <li key={i}>{prize}</li>
              ))}
            </ul>
          </div>

          <div className="info-card">
            <h3>Schedule</h3>
            <ul>
              {tournament.schedule.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Back Link */}
        <div className="back-link">
          <Link to="/">← Back to Tournaments</Link>
        </div>
      </div>
    </div>
  );
};

export default TournamentRegister;