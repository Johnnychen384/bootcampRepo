import {useState} from "react"

function App() {
  let sayHello = () => {
    alert('Hello')
  }

  const [name, setName] = useState('Johnny')
  return (
    <div>
      <h1>My First React App</h1>
      <p>{name}</p>
      <button onClick={sayHello}>Click Me!</button>
    </div>
  );
}

export default App;
