import './App.css'
import Greeting from './Greeting';

function App() {
const name = "Student";
  return (
    //jsx allows js inside of UI
    <>
  <h1>Hello {name}</h1>
  <Greeting/>
  </>
  )
}

export default App
