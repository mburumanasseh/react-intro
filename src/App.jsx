// App.jsx

import "./App.css";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import Profile from "./components/Profile";

// Root component that combines everything
function App() {
  return (
    <div className="app-container">
      {/* Props example */}
      <Greeting name="Nas" />

      {/* State example */}
      <Counter />
      <Profile name="Nas" role="developer" />
    </div>
  );
}

export default App;