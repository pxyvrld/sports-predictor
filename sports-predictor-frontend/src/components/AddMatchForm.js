// AddMatchForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AddMatchForm = ({ onMatchAdded }) => {
  const [homeTeam, setHomeTeam] = useState('');
  const [awayTeam, setAwayTeam] = useState('');
  const [matchDate, setMatchDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const match = { homeTeam, awayTeam, matchDate };

    axios.post('http://localhost:8080/api/matches', match)
      .then(response => {
        console.log('Match added:', response.data);
        onMatchAdded();
        setHomeTeam('');
        setAwayTeam('');
        setMatchDate('');

        setMessage('✅ Mecz dodany!');
        setTimeout(() => setMessage(''), 3000); // zniknie po 3 sekundach
      })
      .catch(error => {
        console.error('Error adding match:', error);
        setMessage('❌ Błąd podczas dodawania meczu.');
        setTimeout(() => setMessage(''), 3000);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Match</h2>
      <input
        type="text"
        placeholder="Home Team"
        value={homeTeam}
        onChange={(e) => setHomeTeam(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Away Team"
        value={awayTeam}
        onChange={(e) => setAwayTeam(e.target.value)}
        required
      />
      <input
        type="datetime-local"
        value={matchDate}
        onChange={(e) => setMatchDate(e.target.value)}
        required
      />
      <button type="submit">Add Match</button>

      {message && <p style={{ color: 'green', marginTop: '10px' }}>{message}</p>}
    </form>
  );
};

export default AddMatchForm;
