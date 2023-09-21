/* IMPORTS =======================================================================
    Import all necessary hooks, files, etc. to be used in this component */
import { useState } from 'react'

import './App.css';
/* ================================================================================= */


/* FUNCTIONALITY ===================================================================
    The functionality associated with this component goes here
        -- State variables go here
        -- simple functions, event handlers, conditionals, etc. go here*/

// One way you can think about breaking down the functionality you'll need:
  // ACTORS
    // The ovens
    // The bakery
  // ACTIONS
    // Bake for a day (& earn money from it)
    // Buy a new oven when affordable (alert if not)
    // Eventually win the game on some conditions
    // See changes to our states reflected in the browser

function App() {
/* OVEN INVENTORY ===========================
    - As we have seen many times, a list of data can we stored as an array of objects! Works perfectly here as a way to contain some fictional appliance store's inventory
    - Include the relevant properties that you will need reference later (upgradeCost, revenue, name) */
  const ovenInventory = [
      {
        name: 'No Bake',
        revenue: 1,
        nextOven: 'EZ Bake',
        upgradeCost: 5
      },
      {
        name: 'EZ Bake',
        revenue: 5,
        nextOven: 'Toaster',
        upgradeCost: 25
      },
      {
        name: 'Toaster',
        revenue: 50,
        nextOven: 'Convection',
        upgradeCost: 250
      },
      {
        name: 'Convection',
        revenue: 100,
        nextOven: 'Factory',
        upgradeCost: 500
      },
      {
        name: 'Factory',
        revenue: 250,
        nextOven: 'Earn $1000 to win the game!',
        upgradeCost: null
      },
  ]
  /*
  - Typically we declare our state variables right after declaring the component itself
    for example: 
    const randomComponent = () => {
      const [state, setState] = useState(some initial value)
    }
  - However, in this case we are relying on an object in our ovenInventory array to provide our intial currentOven state, so we need to remember to put ovenInventory BEFORE currentOven is declared */
// ==============================================

/* DECLARING STATE ==============================
    A state variable should be something we expect to change over time, through some functionality we provide
    Follow this structure:
    const [state, setState] = useState(initial state) */
    const [income, setIncome] = useState(0)
    const [currentOven, setCurrentOven] = useState(ovenInventory[0])
    const [ovenIndex, setOvenIndex] = useState(0)

// CHECK WIN FUNCTION =======================
    // Since both income and currentOven are being tracked in state, we can reference them at any time to check whether or not we've achieved a Factory as our currentOven AND an income of $1000 or more!
    // If we DID win, we should set our states back to their initial values, so a new game can be started!

const checkWin = () => {
  if (income >= 1000 && currentOven.name == 'Factory'){
    alert('You win!')
    setIncome(0)
    setCurrentOven(ovenInventory[0])
    setOvenIndex(0)
  } else {
    alert(`Not quite there, you need to have upgraded to a baking Factory AND have $1,000 to win -- Currently you have $${income} & are using a ${currentOven.name}`)
  }
}
// ===========================================


// BAKE FUNCTION =============================
    // Our Income should increase by the revenue value of our currentOven

const bake = () => {
  setIncome(income + currentOven.revenue)

}
// ============================================



/* UPGRADE FUNCTION ============================
  First we use our currentOven state to check if we already have a Factory

  Then we use our income and currentOven states to make sure we can afford the next upgrade
      -- If we can, then we use setState to replace the income and currentOven states with the values that reflect our purchase

  Lastly, we account for the possibility that we can't afford any upgrades with a simple alert. No state changes needed here

*/

const upgradeOven = () => {
  if (currentOven.name == 'Factory') {
    alert('There are no upgrades')

  } else if (income >= currentOven.upgradeCost && currentOven !== ovenInventory[4]) {
    alert(`You upgraded to the ${currentOven.nextOven}`)

    // UPDATE ALL THE STATES THAT ARE AFFECTED
    setIncome(income - currentOven.upgradeCost)
    setCurrentOven(ovenInventory[ovenIndex + 1])
    setOvenIndex(ovenIndex + 1)
  } else {
    alert('You cannot upgrade right now')
  }
}
// =============================================



/* NEW GAME ====================================
   When starting a new game, we can use setState to reset our states back to their initial values!

*/

let startGame = () => {
  alert('Welcome to React Bakery! You begin with $0, and the only product you can make is no bake pudding, which you sell for $1 per turn. Earn enough to upgrade to an oven and earn more money. The game ends when you have earned $1000 and own a Factory oven.')
  setIncome(0)
  setCurrentOven(ovenInventory[0])
  setOvenIndex(0)
}

// ===============================================================================================================


// RENDERING ==============
    // You MUST wrap all of the JSX you are returning inside of a component's ```return ( )``` expression in a SINGLE outermost <div></div> or React fragment <></>

  return (
    <div>
      <h1>Welcome to the Great British Bakeoff!</h1>

      <button onClick={startGame}>Start a New Game</button>
      <button onClick={checkWin}>Did i win?</button>
      <h4>Current Oven -- {currentOven.name}</h4>
      <h4>Income: {income}</h4>

      <div>
        <button onClick={bake}>British Bake Off!</button>
        <button onClick={upgradeOven}>Buying new Oven</button>
      </div>

      <li>Current Revenue Per Turn: {currentOven.revenue}</li>
      <li>Next Oven Type: {currentOven.nextOven}</li>
      <li>Upgrade Cost: ${currentOven.upgradeCost}</li>
    </div>
  );
}

export default App;