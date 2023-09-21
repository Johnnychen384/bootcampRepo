import {useState} from 'react'

const App = () => {
  const [name, setName] = useState('Brendan')
  

  let sayHello = () => {
    alert('hello') 
  }

  let changeName = (event) => {
     setName(event.target.value)
  }

   return (
    <>
      <h1>My First React App</h1>
      <h3>{name}</h3>
      <input type="text" onChange={changeName}/>
    </>
   )
}


export default App
