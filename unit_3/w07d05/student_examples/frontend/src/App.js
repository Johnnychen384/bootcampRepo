import {useState, useEffect} from "react"
import axios from "axios"
import Person from "./Components/Person"
import Add from "./Components/Add"
import Edit from "./Components/Edit"

function App() {
  const [people, setPeople] = useState([])

  const getPeople = () => {
      axios.get('http://localhost:3000/people')
      .then(res => setPeople(res.data), (err) => console.log(err))
      .catch(error => console.log(error))
  }

  const handleCreate = (data) => {
    axios.post('http://localhost:3000/people', data)
    .then(res => {
      console.log(res)
      getPeople()
    })
  }

  const handleDelete = (e) => {
    axios.delete('http://localhost:3000/people/' + e.target.value)
    .then(res => getPeople())
  }

  const handleEdit = (data) => {
    axios.put('http://localhost:3000/people/' + data._id, data)
    .then(res => getPeople())
  }

  useEffect(() => {
    getPeople()
  }, [])

  const personArray = people.map(person => {
    return (
      <>
        <Person person={person}/>
        <Edit person={person} handleEdit={handleEdit}/>
        <button onClick={handleDelete} value={person._id}>X</button>
      </>
    )
  })
  console.log(personArray)
  return (
    <>
      <h1>People</h1>
      <Add handleCreate={handleCreate}/>
      {personArray}
    </>
  )
}

export default App;
