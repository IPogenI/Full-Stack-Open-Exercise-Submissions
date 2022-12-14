import {useState} from "react"

const App = () => {
  const [counter, setCounter] = useState(0)
  
  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)
  const decreaseByOne = () => setCounter(counter - 1)

  return (
    <div>
      <Display counter={counter}/>
      <Button onClick={increaseByOne} text="plus"/>
      <Button onClick={decreaseByOne} text="minus"/>
      <Button onClick={setToZero} text="zeroo"/>
    </div>
  )
}

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

export default App;
