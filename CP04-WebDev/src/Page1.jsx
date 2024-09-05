import React from 'react';
import sampleImage from './assets/image12.jpg';
import sampleImage2 from './assets/image22.jpg';

function Page1() {
  return (
    <div class="container">
        <div class="text-content">
            <h1>Bem-vindo à revolução dos vídeos!</h1>
            <p>Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores.</p>
            <button class="download-btn">Baixe o app</button>
        </div>
        <div class="image-content">
            <div className="image-container">
                <img src={sampleImage} alt="Imagem 1" class="app-image" />
            </div>
            <div class="image-container">
                <img src={sampleImage2} alt="Imagem 2" class="app-image"/>
            </div>
        </div>
    </div>
  );
}

export default Page1;