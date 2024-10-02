import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function BookList() {
  const API_ENDPOINT = 'http://localhost:3000/api/books';
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    try {
      const response = await axios.get(API_ENDPOINT);
      setBooks(response.data);
    } catch (error) {
      console.error('Erro ao buscar os livros:', error);
    }
  };

  const deleteBook = async (id) => {
    if (window.confirm('Tem certeza que deseja deletar este livro?')) {
      try {
        await axios.delete(`${API_ENDPOINT}/${id}`);
        loadBooks();
      } catch (error) {
        console.error('Erro ao deletar o livro:', error);
      }
    }
  };

  return (
    <div>
      <h2>Lista de Livros</h2>
      <div className="table-container">
        {books.map((book) => (
          <div className="card mb-3" key={book.id}>
            <div className="card-body">
              <h5 className="card-title">{book.nome}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{book.autor}</h6>
              <p className="card-text">Editora: {book.editora}</p>
              <Link to={`/edit-book/${book.id}`} className="btn btn-primary btn-sm mr-2">
                Editar
              </Link>
              <button className="btn btn-danger btn-sm" onClick={() => deleteBook(book.id)}>
                Deletar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;
