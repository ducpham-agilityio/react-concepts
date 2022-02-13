import logo from './logo.svg'
import './App.css'
import Inventory from './components/Inventory';

function App() {
  return (
    <div className="App">
      <div className="App-body">
        {/* React Memo demo */}
        <Inventory />
      </div>
    </div>
  )
}

export default App
