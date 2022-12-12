import {useState} from "react"

const App = (props) => {
  const [counter, setCounter] = useState(0)

  console.log('rendering..', counter)

  setTimeout(
    () => setCounter(counter + 1), 1000
  )

  return (
    <div>
      <p>{counter}</p>
    </div>
  )
}

export default App;
