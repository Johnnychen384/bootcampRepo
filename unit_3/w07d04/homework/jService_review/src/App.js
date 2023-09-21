import './App.css';
import axios from "axios"
import {useState, useEffect} from 'react'

const App = () => {
// FUNCTIONALITY TIME =========================================
const [jeopardyQ, setJeopardyQ] = useState({})
const [score, setScore] = useState(0)
const [reveal, setReveal] = useState(false)

const getJeopardyData = () => {
  axios.get('http://jservice.io/api/random')
  .then((response)=>{
    setJeopardyQ(response.data[0])
  })
  setReveal(false)
  }

  // BUTTON FUNCTIONS ================
  const increase = () => {
    setScore(score + jeopardyQ.value)
  }
  const decrease = () => {
    setScore(score - jeopardyQ.value)
  }
  const revealQuestion = () => {
    setReveal(true)
  }
  const resetGame = () => {
    setScore(0)
    setReveal(false)
  }
  // ==================================

useEffect(()=>{
  getJeopardyData()
}, [])


// RENDERING TIME =========================================
return (
  <>
    <h1>Welcome to Jeopardy!</h1>
    <h2>Let's Play!</h2>
    <button className="start" onClick={getJeopardyData}>Get Question</button>

    <div className="scoreboard">
      <h1>SCORE: {score}</h1>
      <button className="increase" onClick={increase}>Increase</button>
      <button className="decrease" onClick={decrease}>Decrease</button>
    </div>
  
    <button onClick={revealQuestion}>Question Reveal</button>
    <div>
      {reveal ? 
      <h2>Question Revealed: {jeopardyQ.question}</h2>
      : null }
    </div>

    <div className="randomQ">
      <h2>Points: {jeopardyQ.value}</h2>
      <h2>Answer: {jeopardyQ.answer}</h2>
    </div>

    <button onClick={resetGame}>Reset Game</button>

  </>
);
}

export default App;