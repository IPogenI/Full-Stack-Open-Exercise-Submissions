const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }
  return (
    <div>
      <p>Hello {props.name}, you must be {props.age} years old.</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}


const App = () => {
  const name = "Prottoy"
  const age = 21

  return (
    <div>
      <Hello name={name} age={age} />
    </div>
  )
}

export default App;
