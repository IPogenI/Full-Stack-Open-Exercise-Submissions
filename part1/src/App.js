const Hello = ({ name, age }) => {
  
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you must be {age} years old.</p>
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
