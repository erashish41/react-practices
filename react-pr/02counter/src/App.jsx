import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)   // counter can be any word, setCounter is function. seCounter and be ashishCounter, etc
                                            
  // let counter = 15

  const addValue = () => {
    // counter = counter + 1 
    if (counter < 20)
    setCounter(counter + 1 )
    console.log('value added', {counter});
  }
 

  const removeValue = () => {
  
    if(counter > 0)
    setCounter (counter - 1)
    console.log('value added', {counter});
  }

  

  return (
    <>
      <h1>Made counte button </h1>
      <h2>counter value: {counter}</h2>
      
      <button onClick={addValue}>add value</button>
      <br/>
      <button onClick={removeValue}>remove value</button>
      <p>footer</p>
    </>
  )
}

export default App
