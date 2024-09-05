import React from 'react';
import sampleImage from './assets/twiter.jpg';
import sampleImage2 from './assets/insta.jpg';
import sampleImage3 from './assets/disc.jpg';

function Page2() {
  return (
    <div className="contact-container">
      <div className="left-side">
        <h2>Dúvidas e suporte, entre em contato:</h2>
        <div className="social-icons">
          <a href="#">
            <img src={sampleImage} alt="Twitter" />
          </a>
          <a href="#">
            <img src={sampleImage2} alt="Instagram" />
          </a>
          <a href="#">
            <img src={sampleImage3} alt="Discord" />
          </a>
        </div>
      </div>
      <div className="right-side">
        <form className="contact-form">
          <label htmlFor="name">Nome :</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">E-mail :</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Mensagem:</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Page2;