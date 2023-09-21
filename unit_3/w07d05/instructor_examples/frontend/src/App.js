import {useState, useEffect} from 'react'
import axios from 'axios'

import Person from './components/Person'
import Add from './components/Add'
import Edit from './components/Edit'

const App = () => {
  const [people, setPeople] = useState([])

  const getPeople = () => {
     axios.get('http://localhost:3000/people')
     .then((response) => setPeople(response.data), (err) => console.log(err))
     .catch((error) => console.log(error))
  }

  const testHook = () => {
   console.log("qioleujhrgfiouqerh")
  }

  const handleCreate = (data) => {
     axios.post('http://localhost:3000/people', data)
     .then((response) => {
        console.log(response)
        let newPeople = [...people, response.data]
        setPeople(newPeople)
     })
  }

  const handleEdit = (data) => {
    axios.put('http://localhost:3000/people/' + data._id, data)
    .then((response) => {
       console.log(response)
       let newPeople = people.map((person) => {
        return person._id !== data._id ? person : data
       })
       setPeople(newPeople)
    })
 }

  const handleDelete = (deletedPerson) => {
     axios.delete('http://localhost:3000/people/' + deletedPerson._id)
     .then((response) => {

      let newPeople = people.filter((person) => {
         return person._id !== deletedPerson._id
      })
      
      setPeople(newPeople)
     })
  }

  useEffect(() => {
     getPeople()
  }, [])

   return(
    <>
      <h1>People</h1>
      <Add handleCreate={handleCreate}/>
      {people.map((person) => {
         return (
          <>
            <Person person={person} />
            <Edit person={person} handleEdit={handleEdit}/>
            <button onClick={()=>{handleDelete(person)}}>X</button>
          </>
         )
      })}
    </>
   )
}

export default App

