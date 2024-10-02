import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditBook() {
  const API_ENDPOINT = 'http://localhost:3000/api/books';
  const [nome, setNome] = useState('');
  const [autor, setAutor] = useState('');
  const [editora, setEditora] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    loadBookDetails();
  }, []);

  const loadBookDetails = async () => {
    try {
      const response = await axios.get(`${API_ENDPOINT}/${id}`);
      const book = response.data;
      setNome(book.nome);
      setAutor(book.autor);
      setEditora(book.editora);
    } catch (error) {
      console.error('Erro ao buscar o livro:', error);
      alert('Erro ao buscar o livro.');
      navigate('/books');
    }
  };

  const updateBook = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API_ENDPOINT}/${id}`, { nome, autor, editora });
      alert('Livro atualizado com sucesso!');
      navigate('/books');
    } catch (error) {
      console.error('Erro ao atualizar o livro:', error);
      alert('Erro ao atualizar o livro.');
    }
  };

  return (
    <div>
      <h2>Editar Livro</h2>
      <form onSubmit={updateBook}>
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
        <button type="submit" className="btn btn-primary">
          Atualizar
        </button>
      </form>
    </div>
  );
}

export default EditBook;
