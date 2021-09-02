import { useState } from 'react';
import "../src/styles/Font.css"
import './App.css';
import Navigation from './layout/Navigation/Navigation';
import Sidebar from './layout/Sidebar/Sidebar';
import Home from './pages/Home/Home';

function App() {

  const [open, setOpen] = useState(true)

  const toggleMenu = () => {
    setOpen(!open)
  }

  return (
    <div className="wrapper">
      <Sidebar open={open} />
      <div className="px-2 w-100 flow-auto">
        <Navigation open={open} toggleMenu={toggleMenu} />
        <Home />
      </div>
    </div>
  );
}

export default App;
