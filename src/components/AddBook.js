import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddBook() {
  const API_ENDPOINT = 'http://localhost:3000/api/books';
  const [nome, setNome] = useState('');
  const [autor, setAutor] = useState('');
  const [editora, setEditora] = useState('');
  const navigate = useNavigate();

  const addBook = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_ENDPOINT, { nome, autor, editora });
      alert('Livro adicionado com sucesso!');
      navigate('/books');
    } catch (error) {
      console.error('Erro ao adicionar o livro:', error);
      alert('Erro ao adicionar o livro.');
    }
  };

  return (
    <div>
      <h2>Adicionar Livro</h2>
      <form onSubmit={addBook}>
        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="autor">Autor</label>
          <input
            type="text"
            className="form-control"
            id="autor"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="editora">Editora</label>
          <input
            type="text"
            className="form-control"
            id="editora"
            value={editora}
            onChange={(e) => setEditora(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          Adicionar
        </button>
      </form>
    </div>
  );
}

export default AddBook;
