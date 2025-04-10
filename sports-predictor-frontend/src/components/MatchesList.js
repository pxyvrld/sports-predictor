// MatchesList.js
import React from 'react';

const MatchesList = ({ matches }) => {
  return (
    <div>
      <h2>Matches List</h2>
      <ul>
        {matches.length === 0 ? (
          <li>No matches available.</li>
        ) : (
          matches.map(match => (
            <li key={match.id}>
              {match.homeTeam} vs {match.awayTeam} - {new Date(match.matchDate).toLocaleString()}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default MatchesList;
