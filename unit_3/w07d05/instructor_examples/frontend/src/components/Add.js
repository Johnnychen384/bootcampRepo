import {useState} from 'react'

const Add = (props) => {
   const [person, setPerson] = useState({name: '', age: 0})

   const handleChange = (event) => {
    setPerson({...person, [event.target.name]: event.target.value})
   }

   const handleSubmit = (event) => {
      event.preventDefault()
      props.handleCreate(person)
   }

   return(
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input type='text' name='name' onChange={handleChange}/>
        <br/>
        <br/>
        <label htmlFor='age'>Age:</label>
        <input type='number' name='age' onChange={handleChange}/>
        <input type="submit"/>
      </form>
    </>
   )
}

export default Add
