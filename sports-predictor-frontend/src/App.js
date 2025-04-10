// App.js
import React, { useEffect, useState } from 'react';
import MatchesList from './components/MatchesList';
import AddMatchForm from './components/AddMatchForm';
import axios from 'axios';

function App() {
  const [matches, setMatches] = useState([]);

  const fetchMatches = () => {
    axios.get('http://localhost:8080/api/matches')
      .then(response => setMatches(response.data))
      .catch(error => console.error('Error fetching matches:', error));
  };

  useEffect(() => {
    fetchMatches();
  }, []);

  return (
    <div className="App">
      <h1>Sports Predictor</h1>
      <AddMatchForm onMatchAdded={fetchMatches} />
      <MatchesList matches={matches} />
    </div>
  );
}

export default App;
