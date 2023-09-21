import React from "react"

function App() {
  const inventory = [
    {tool: 'no bake pudding', cost: 0, profit: 1},
    {tool: "easy bake oven", cost: 5, profit: 5},
    {tool: "old-toaster-oven", cost: 25, profit: 50},
    {tool: "convection oven", cost: 50, profit: 100},
    {tool: "factory", cost: 100, profit: 250}
  ]
  const [money, setMoney] = React.useState(0)
  const [tool, setTool] = React.useState([inventory[0]])
  const [index, setIndex] = React.useState(0)
 

  const makeMoney = () => {
    let newTotal = money
    for(let t of tool){
      newTotal += t.profit
    }
    setMoney(newTotal)
    alert(`You made ${newTotal}`)
  }

  const changeTool = () => {
    if(money >= inventory[index + 1].cost){
      const temp = index + 1
      const newTotal = money - inventory[temp].cost
      // console.log(newTotal, tool)
      console.log(tool, inventory[temp])
      const arr = [...tool, inventory[temp]]
      setTool(arr)
      setIndex(temp)
      setMoney(newTotal)
    } else {
      alert("Not enough money")
    }
  }

  const resetGame = () => {
    setTool([inventory[0]])
    setMoney(0)
    setIndex(0)
  }

  const toolNames = tool.map(t => `${t.tool}, `)
  const inveItems = tool.map(t => <button onClick={(e) => {
    sell(e)
  }} value={t.tool}>{t.tool}</button>)

  const sell = (e) => {
    let target  = e.target.value
    let index = tool.findIndex(item => {
      return item.tool === target
    });
    const newArr = [...tool]
    let newTotal = money + tool[index].cost / 2
    let newIndex = index - 1
    newArr.splice(index, 1)
    setTool(newArr)
    setMoney(newTotal)
    setIndex(newIndex)
  }

  React.useEffect(() => {
    if(money >= 1000){
      if(tool[tool.length - 1].tool === "factory"){
        alert("you win!")
        resetGame()
      }
    }
  }, [money])
  return (
    <>
      <h1>Your Bank: {money}</h1>
      <h2>Current tool: {toolNames.length < 2 ? tool[0].tool : toolNames}</h2>

      <button onClick={makeMoney}>Earn Money</button>
      <button onClick={changeTool}>Upgrade</button>
      <button onClick={resetGame}>Reset</button>
      {inveItems}
    </>
    
  );
}

export default App;
