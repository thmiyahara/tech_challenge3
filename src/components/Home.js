import React from 'react';

function Home() {
  return (
    <div className="text-center mt-5">
      <h1>Estante Digital</h1>
      <p>
        Gerencie sua estante digital de livros.
      </p>
      { <img src="estante_livros.jpg" alt="Estante de Livros" style={{ maxWidth: '100%', height: 'auto' }} /> }
    </div>
  );
}

export default Home;
