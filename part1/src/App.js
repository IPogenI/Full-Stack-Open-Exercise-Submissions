import {useState} from "react"

const App = () => {
  const [counter, setCounter] = useState(0)
  
  const increaseByOne = () => setCounter(counter + 1)

  const decreaseByOne = () => setCounter(counter - 1)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseByOne}>
        plus
      </button>
      <button onClick={decreaseByOne}> 
        zero
      </button>
    </div>
  )
}

export default App;
