import '../App.css'
import { useState } from 'react';

// API

// const options = {
//   method: 'GET',
//   url: 'https://heisenbug-champions-league-live-scores-v1.p.rapidapi.com/api/championsleague',
//   params: {matchday: '1', group: 'A', live: 'false'},
//   headers: {
//     'X-RapidAPI-Key': '7b8005e039mshf5ef2dd5334b372p1a3668jsn92fbab08b222',
//     'X-RapidAPI-Host': 'heisenbug-champions-league-live-scores-v1.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
//     console.log(response.data);
// }).catch(function (error) {
//     console.error(error);
// });

// Display game results

const GameResults = (props) => {
  const [matches] = useState([
    {
    group: "A", referee: "Tobias Stieler",
    team1: { teamName: 'ajax', teamScore: 4, firstHalfScore: 3 },
    team2: { teamName: 'Rangers', teamScore: 0, firstHalfScore: 0 },
    time: "FT", when: "Wednesday, Sep 07 2022 17:45"
  },
  {
    group: "B", referee: "Carlos del Cerro Grande",
    team1: { teamName: 'Napoli', teamScore: 4, firstHalfScore: 3 },
    team2: { teamName: 'Liverpool', teamScore: 1, firstHalfScore: 0 },
    time: "FT", when: "Wednesday, Sep 07 2022 17:45"
  },
  {
    group: "C", referee: "Artur Manuel Soares Dias",
    team1: { teamName: 'Liverpool', teamScore: 2, firstHalfScore: 1 },
    team2: { teamName: 'Ajax', teamScore: 1, firstHalfScore: 1 },
    time: "FT", when: "Tuesday, Sep 13 2022 20:00"
  }
]);

  return (
    <div>
      {matches.map(match => (
        <div key={match.when}>
          <h2>Group {match.group}</h2>
          <p>Referee: {match.referee}</p>
          <p>
            {match.team1.teamName} {match.team1.teamScore} - {match.team2.teamScore} {match.team2.teamName}
          </p>
          <p>First Half: {match.team1.firstHalfScore} - {match.team2.firstHalfScore}</p>
          <p>Time: {match.time}</p>
          <p>When: {match.when}</p>
        </div>
      ))}
    </div>,
    <div>
      {matches.map(match => (
        <div key={match.when}>
          <h2>Group {match.group}</h2>
          <p>Referee: {match.referee}</p>
          <p>
            {match.team1.teamName} {match.team1.teamScore} - {match.team2.teamScore} {match.team2.teamName}
          </p>
          <p>First Half: {match.team1.firstHalfScore} - {match.team2.firstHalfScore}</p>
          <p>Time: {match.time}</p>
          <p>When: {match.when}</p>
        </div>
      ))}
    </div>
  );
}

export default GameResults;