import {useState, useEffect} from "react"
import axios from "axios"
import Character from "./Components/Character"
import Episode from "./Components/Episode"
import "./App.css"

function App() {
  const [characters, setCharacters] = useState([])
  const [episodes, setEpisodes] = useState([])

  const getCharacters = () => {
    axios.get('https://rickandmortyapi.com/api/character').then(res => {
      setCharacters(res.data.results)
    })

    setEpisodes([])
  }

  const getEpisodes= () => {
    axios.get('https://rickandmortyapi.com/api/episode').then(res => {
      setEpisodes(res.data.results)
    })

    setCharacters([])
  }


  const charArray = characters.map(char => <Character character={char}/>)
  const episodeArray = episodes.map(epi => <Episode episode={epi}/>)

  return (
    <>
      <h1 className="text-white">Rick && Morty</h1>

      <img className="w-25 mx-auto my-3" src="https://media.cdn.adultswim.com/uploads/20220811/thumbnails/2_228111721460-AS_RAM_S6A_Trailer_90_Licensed_Music_SOCIAL_Dated_16x9_wCC.jpg" alt="" />

      <div className="container d-flex justify-content-center">
        <button class='btn text-white w-25' onClick={getCharacters}>Show Characters</button>
        <button class="btn text-white w-25" onClick={getEpisodes}>Show Episodes</button>
      </div>

      {charArray.length > 0 ? <h2 className="text-white">Characters</h2> : null}
      {episodeArray.length > 0 ? <h2 className="text-white">Episodes</h2> : null}

      <div className="container-fluid d-flex justify-content-around flex-wrap">
        {charArray}
      </div>
      
      <div className="container-fluid d-flex justify-content-around flex-wrap">
        {episodeArray}
      </div>

    </>
  )
  
}

export default App;



