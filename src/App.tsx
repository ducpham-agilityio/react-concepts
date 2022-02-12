import logo from './logo.svg'
import './App.css'
import Inventory from './components/Inventory';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* React Memo demo */}
        <Inventory />
      </header>
    </div>
  )
}

export default App
