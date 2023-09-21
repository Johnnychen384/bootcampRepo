import {useState} from 'react'

const Edit = (props) => {
  const [person, setPerson] = useState({...props.person})

  const handleChange = (event) => {
    setPerson({...person, [event.target.name]: event.target.value})
   }

   const handleSubmit = (event) => {
      event.preventDefault()
      props.handleEdit(person)
   }

  return(
    <>
      <details>
        <summary>Edit Person</summary>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' onChange={handleChange} value={person.name}/>
          <br/>
          <br/>
          <label htmlFor='age'>Age:</label>
          <input type='number' name='age' onChange={handleChange} value={person.age}/>
          <input type="submit"/>
        </form>
      </details>
    </>
  )
}

export default Edit