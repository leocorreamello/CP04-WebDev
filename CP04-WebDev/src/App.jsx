import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Page1 from './Page1';
import Page2 from './Page2';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/page1">Sobre</Link></li>
            <li><Link to="/page2">Contato</Link></li>
          </ul>
        </nav>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home count={count} setCount={setCount} />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function Home({ count, setCount }) {
  return (
    <>
      
    </>
  );
}

export default App;