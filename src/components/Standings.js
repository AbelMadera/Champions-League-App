import { useState } from 'react'
import '../App.css'

// API

// const Standings = () => {
//   const [data, setData] = useState([])

// useEffect(() => {
// const options = {
//   method: 'GET',
//   url: 'https://heisenbug-champions-league-live-scores-v1.p.rapidapi.com/api/championsleague/table',
//   params: {group: 'A'},
//   headers: {
//     'X-RapidAPI-Key': '7b8005e039mshf5ef2dd5334b372p1a3668jsn92fbab08b222',
//     'X-RapidAPI-Host': 'heisenbug-champions-league-live-scores-v1.p.rapidapi.com'
//   }
// }
// axios.request(options).then(function (response) {
// 	console.log(response.data)
// }).catch(function (error) {
// 	console.error(error);
// });})}

// Standings Table
const RecordTable = () => {

const [records] = useState([
  {
    draw: 0,
    goalsAgainst: 6,
    goalsFor: 20,
    loss: 1,
    played: 6,
    points: 15,
    team: "Napoli",
    win: 5
  },
  {
    draw: 0,
    goalsAgainst: 6,
    goalsFor: 17,
    loss: 1,
    played: 6,
    points: 15,
    team: "Liverpool",
    win: 5
  },
  {
    draw: 0,
    goalsAgainst: 16,
    goalsFor: 11,
    loss: 4,
    played: 6,
    points: 6,
    team: "Ajax",
    win: 2
  },
  {
    draw: 0,
    goalsAgainst: 10,
    goalsFor: 5,
    loss: 5,
    played: 6,
    points: 3,
    team: "Rangers",
    win: 1
  }
  // other records here
]);

  return (
    <table>
      <thead>
      <h1>Group A</h1>
        <tr>
          <th>Team</th>
          <th>Played</th>
          <th>Wins</th>
          <th>Draws</th>
          <th>Losses</th>
          <th>Goals For</th>
          <th>Goals Against</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {records.map((record, index) => (
          <tr key={index}>
            <td>{record.team}</td>
            <td>{record.played}</td>
            <td>{record.win}</td>
            <td>{record.draw}</td>
            <td>{record.loss}</td>
            <td>{record.goalsFor}</td>
            <td>{record.goalsAgainst}</td>
            <td>{record.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RecordTable;