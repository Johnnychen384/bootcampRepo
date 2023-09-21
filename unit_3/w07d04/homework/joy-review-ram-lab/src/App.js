import { useState } from 'react';
import axios from 'axios';
import Character from './Components/Character';
import './App.css';

function App () {


/*=========================
  |--- States ---|
=========================*/

  /* --- Plenty of different possible setups that would work
  DRY code is the goal, WORKING code is the priority --- */
  const [chars, setChars] = useState(false)
  const [eps, setEps] = useState(false)

  /* --- Using display allows me to only store one dataset/response object at a time; only the most recently called data, rather than storing data for both categories after each has been called at least once --- */
  const [display, setDisplay] = useState([])

  /* --- In each GET request, we get api routes to the next & prev pages at response.data.info.next & response.data.info.prev; this is one way to keep track of them ---*/
  const [next, setNext] = useState("")
  const [prev, setPrev] = useState("")


  /*=========================
  |--- GET Characters ---|
=========================*/
const getCharacters = () => {
  axios.get(`https://rickandmortyapi.com/api/character`)
  .then((res)=>{

    console.log(res.data)

    /* --- Toggle the Eps & Chars states & replace the current Display --- */
    setEps(false)
    setDisplay(res.data.results)
    setChars(true)

    /* --- Update the next & prev routes --- */
    setNext(res.data.info.next)
    setPrev(res.data.info.prev)

  })
}
 
/*=========================
  |--- GET Episodes ---|
=========================*/
const getEpisodes = () => {
  axios.get(`https://rickandmortyapi.com/api/episode`)
  .then((res)=>{

    console.log(res.data)

    /* --- Toggle the Eps & Chars states & replace the current Display --- */
    setChars(false)
    setDisplay(res.data.results)
    setEps(true)

    /* --- Update the next & prev routes --- */
    setNext(res.data.info.next)
    setPrev(res.data.info.prev)

  })
}

/*=========================
  |--- Pagination ---|
=========================*/

/* --- Next Page --- */
const getNext = () => {
  axios.get(next)
  .then((res)=>{

    console.log(res.data)
    /* --- Update the current display & next/prev states --- */
      /* next and prev are both storing their respective routes from res.data.info */
    setDisplay(res.data.results)
    setNext(res.data.info.next)
    setPrev(res.data.info.prev)
  })
}

/* --- Prev Page --- */
const getPrev = () => {
  axios.get(prev)
  .then((res)=>{

    /* --- Update the current display & next/prev states --- */
      /* next and prev are both storing their respective routes from res.data.info */
    setDisplay(res.data.results)
    setNext(res.data.info.next)
    setPrev(res.data.info.prev)
  })
}


return (
  <div className="App">
    <h1>Rick and Morty</h1>

    <div className="buttons">
      <button onClick={getCharacters}>Characters</button>
      <button onClick={getEpisodes}>Episodes</button>
      <button onClick={getNext}>Next Page</button>
      <button onClick={getPrev}>Prev Page</button>
    </div>

    <div className="grid-display">


{/* ====== CONDITIONAL RENDERING ====== */}


{/* --- Characters --- */}
{/* "If chars (the state variable) is currently equal to **true**, then render this kind of card component" */}
      {chars ?
        <div className="card-grid">
        {display.map((display)=>{


          return (
            <Character key={display.id} display={display} />
          )


        })}
        </div>
      : null}


{/* --- Episodes --- */}
{/* "If eps (the state variable) is currently equal to **true**, then render this kind of card component" */}
        {eps ?
          <div className="card-grid">
          {display.map((display)=>{

            
            return (
              <div key={display.id} className="ep card">
                <h2>{display.name}</h2>
                <h4>{display.episode}</h4>
                <h4>{display.air_date}</h4>
              </div>
            )


          })}
        </div>
      : null}


    </div>
  </div>
);
}

export default App;




