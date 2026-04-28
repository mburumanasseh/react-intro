import './App.css'
import Greeting from './Greeting';

function App() {
  return (
    //jsx allows js inside of UI
    //components can receive data- we call that props
    <>
    <h1 className='hero'>Welcome to the Student Board</h1>
  <Greeting name ="Eugene"/> 
</>
  )
}

export default App
