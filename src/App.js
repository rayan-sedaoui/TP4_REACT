import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [taches, setTaches] = useState([]);

  const ajouterTache = (texte) => {
    const nouvelleTache = { id: Date.now(), texte, terminee: false };
    setTaches([...taches, nouvelleTache]);
  };

  const changerEtat = (id) => {
    setTaches(taches.map((t) => t.id === id ? { ...t, terminee: !t.terminee } : t));
  };

  const supprimerTache = (id) => {
    setTaches(taches.filter((t) => t.id !== id));
  };

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif', maxWidth: '500px', margin: '50px auto',
      textAlign: 'center', padding: '20px', backgroundColor: '#f4f7f6',
      borderRadius: '15px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ color: '#2c3e50', marginBottom: '30px' }}>🚀 My Super To-Do</h1>
      <TodoForm ajouterTache={ajouterTache} />
      <TodoList taches={taches} changerEtat={changerEtat} supprimerTache={supprimerTache} />
      <div style={{ marginTop: '20px', fontSize: '14px', color: '#95a5a6', fontWeight: 'bold' }}>
        Tâches complétées : {taches.filter(t => t.terminee).length} / {taches.length}
      </div>
    </div>
  );
}

export default App;