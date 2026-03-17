import { useState } from 'react';

function TodoForm({ ajouterTache }) {
  const [texte, setTexte] = useState('');
  const [erreur, setErreur] = useState('');

  const soumettreFormulaire = (e) => {
    e.preventDefault();
    if (texte.trim() === '') {
      setErreur('⚠️ Attention : la tâche ne peut pas être vide !');
      return;
    }
    ajouterTache(texte);
    setTexte('');
    setErreur('');
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <form onSubmit={soumettreFormulaire} style={{ display: 'flex', justifyContent: 'center' }}>
        <input
          value={texte}
          onChange={(e) => {
            setTexte(e.target.value);
            setErreur('');
          }}
          placeholder="✍️ Ajouter une mission..."
          style={{
            padding: '10px',
            borderRadius: '5px 0 0 5px',
            border: erreur ? '2px solid #e74c3c' : '2px solid #3498db',
            outline: 'none',
            width: '250px'
          }}
        />
        <button type="submit" style={{
          padding: '10px 20px',
          backgroundColor: '#3498db',
          color: 'white',
          border: '2px solid #3498db',
          borderRadius: '0 5px 5px 0',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          GO !
        </button>
      </form>
      {erreur && <p style={{ color: '#e74c3c', fontSize: '14px', marginTop: '8px', fontWeight: 'bold' }}>{erreur}</p>}
    </div>
  );
}

export default TodoForm;