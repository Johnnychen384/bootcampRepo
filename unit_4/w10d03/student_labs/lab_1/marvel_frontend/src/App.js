import logo from './logo.svg';
import './App.css';
import {useState, useEffect, Component} from 'react'
import AddForm from './Components/AddForm'
import Hero from './Components/Hero'
import axios from "axios"

function App() {
  const [heros, setHeros] = useState([])

  const getHeros = () => {
    axios.get('http://localhost:8000/api/heros')
    .then(res => setHeros(res.data))
    .catch(err => console.log(err))
  }

  const handleCreate = (data) => {
    axios.post('http://localhost:8000/api/heros', data)
    .then(res => getHeros())
    .catch(err => console.log(err))
  }

  const handleDelete = (id) => {
    axios.delete('http://localhost:8000/api/heros/' + id)
    .then(res => getHeros())
    .catch(err => console.log(err))
  }

  const handleEdit = (data) => {
    axios.put('http://localhost:8000/api/heros/' + data.id, data)
    .then(res => getHeros())
    .catch(err => console.log(err))
  }


  useEffect(() => {
    getHeros()
  }, [])


  const herosArray = heros.map(hero => <Hero hero={hero} key={hero.id} handleDelete={handleDelete} handleEdit={handleEdit}/>)

  return (
    <>
      <AddForm handleCreate={handleCreate}/>

      {herosArray}
    
    </>

  )
}

export default App;
