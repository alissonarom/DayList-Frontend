import React, { useState } from 'react';

import api from './Services/api';

import './app.css';
import './global.css';
import './sidebar.css';
import './main.css';

import Notes from './Components/Notes';


function App() {
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

  }

  return (
    <div id="app">
      <aside>
        <strong>Caderno de notas</strong>
        <form onSubmit={handleSubmit} >

          <div className="input-block">
            <label htmlFor="title">Título da Anotação</label>
            <input
              required
              value={title}
            />
          </div>

          <div className="input-block">
            <label htmlFor="nota">Anotações</label>
            <textarea
              required
              value={notes}
            />
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <Notes />
        </ul>
      </main>
    </div>
  );
}

export default App;
