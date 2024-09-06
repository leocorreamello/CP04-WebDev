import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Page1 from './Page1';
import Page2 from './Page2';
import sampleImage from './assets/banner.jpg';

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
      <section className="header">
        <div className="text-box">
          <h1>Crie seus vídeos online</h1>
          <p>Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.</p>
          <button>Começar agora!</button>
        </div>
        <div className="image-box">
          <img src={sampleImage} alt="Imagem de vídeo criativo" />
        </div>
      </section>

      <section className="platforms">
        <div className="platform youtube">
          <h2>01</h2>
          <h3>Youtube</h3>
          <p>Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.</p>
        </div>

        <div className="platform tiktok">
          <h2>02</h2>
          <h3>Tiktok</h3>
          <p>Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.</p>
        </div>

        <div className="platform facebook">
          <h2>03</h2>
          <h3>Facebook</h3>
          <p>Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.</p>
        </div>

        <div className="platform instagram">
          <h2>04</h2>
          <h3>Instagram</h3>
          <p>Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.</p>
        </div>
      </section>
    </>
  );
}

export default App;