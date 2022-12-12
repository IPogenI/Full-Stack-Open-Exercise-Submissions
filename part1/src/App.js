const Hello = ({ name, age }) => {
  
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you must be {age} years old.</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}


const App = (props) => {
  const {counter} = props 

  return (
    <div>
      <p>Decimal Numbers: {counter}</p>
    </div>
  )
}

export default App;
