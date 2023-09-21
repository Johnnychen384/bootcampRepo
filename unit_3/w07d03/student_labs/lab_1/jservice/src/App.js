import {useState, useEffect} from "react"
import axios from "axios"
import Question from "./Components/Question"
import History from "./Components/History"
import "./App.css"

function App() {
  // score of game
  const [score, setScore] = useState(0)

  // question Array
  const [currentQuestion, setCurrentQuestion] = useState([])

  const [isItHistory, setIsItHistory] = useState(false)

  const [bool, setBool] = useState(false)

  // calls api for 1 single question
  const getQuestion = () => {
      axios.get('http://jservice.io/api/random').then(res => {
        setCurrentQuestion(res.data)
        setIsItHistory(false)
      })
  }

  // calls api for 10 questions
  const get10Questions = () => {
    axios.get('http://jservice.io/api/random?count=10').then(res => {
      setCurrentQuestion(res.data)
      setIsItHistory(false)
    })
  }

  const getHistoryQuestion = () => {
    axios.get('http://jservice.io/api/category?id=4').then(res => {
        let arr = []
        for(let i = 0; i < 10; i++){
          arr.push(res.data.clues[i])
        }
        setCurrentQuestion(arr)
        setIsItHistory(true)
      })
  }

  // maps through array of questions and returns a new array containing Question.js template
  let questionArr = currentQuestion.map((question, i) => {
    return (
      <div key={i}>
        {/* <Question question={currentQuestion} state={isItHidden} setState={setIsItHidden}/> */}
        <Question question={currentQuestion} bool={bool}/>
        <hr></hr>
      </div>
      
    )
  }) 
  
  // maps through history related array
  let historyArr = currentQuestion.map((question, i) => {
    return (
      <div key={i}>
        <History question={question} bool={bool}/>
        <hr></hr>
      </div>
      
    )
  }) 

  return (
    <>
      <h1>Welcome to Jeopardy!</h1>
      <h2>Score: {score}</h2>
      <div className="btn">

        {/* decrements score by array items */}
        <button className="btn-1" onClick={() => {

          // only functions if there are questions in the currentQuestion state
          if(currentQuestion){
            
            setScore(score - currentQuestion[0].value)
          } else {
            alert("Please get question")
          }
          
        }}>Decrease</button>

        {/* Increments score by array items */}
        <button onClick={() => {

          // only functions if there are questions in the currentQuestion state
          if(currentQuestion){
            
            setScore(score + currentQuestion[0].value)
          } else {
            alert("Please get question")
          }
        }}>Increase</button>

        {/* resets score */}
        <button className="btn-2" onClick={() => {
          setScore(0)
        }}>Reset</button>

      </div>

      <h2>Lets Play!</h2>
      
      <div>
        <button onClick={() => getQuestion()}>Get A Question</button> 
        <button onClick={() => get10Questions()}>Get 10 Questions</button> 
        <button onClick={() => getHistoryQuestion()}>Get History Question</button> 
      </div>
     
      {/* renders array of elements */}
      {isItHistory ? historyArr: questionArr}
      
    </>
  );
}

export default App;
