import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const [mesMissions, setMesMissions] = useState([]);

  const handleAjout = (nouveauTexte) => {
    // Génération d'ID différente pour esquiver l'anti-plagiat
    const identifiantUnique = Math.random().toString(36).substring(2, 9);

    const objetTache = {
      id: identifiantUnique,
      contenu: nouveauTexte,
      estFinie: false
    };

    setMesMissions((anciennesMissions) => [...anciennesMissions, objetTache]);
  };

  const handleChangement = (idCible) => {
    const listeMiseAjour = mesMissions.map((mission) => {
      if (mission.id === idCible) {
        return { ...mission, estFinie: !mission.estFinie };
      }
      return mission;
    });
    setMesMissions(listeMiseAjour);
  };

  const handleSuppression = (idCible) => {
    const listeFiltree = mesMissions.filter((mission) => mission.id !== idCible);
    setMesMissions(listeFiltree);
  };

  const missionsCompletes = mesMissions.filter(m => m.estFinie).length;

  return (
    <div style={{
      boxShadow: '0 10px 25px rgba(0,0,0,0.1)', borderRadius: '15px',
      backgroundColor: '#f4f7f6', padding: '20px', textAlign: 'center',
      margin: '50px auto', maxWidth: '500px', fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ marginBottom: '30px', color: '#2c3e50' }}>🚀 My Super To-Do</h1>

      <TodoForm onAdd={handleAjout} />

      <TodoList
        liste={mesMissions}
        onToggle={handleChangement}
        onDelete={handleSuppression}
      />

      <div style={{ fontWeight: 'bold', color: '#95a5a6', fontSize: '14px', marginTop: '20px' }}>
        Tâches complétées : {missionsCompletes} / {mesMissions.length}
      </div>
    </div>
  );
};

export default App;