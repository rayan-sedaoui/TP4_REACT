import { useState } from 'react';

const TodoForm = ({ onAdd }) => {
  const [valeurInput, setValeurInput] = useState('');
  const [msgAlerte, setMsgAlerte] = useState('');

  const gererValidation = (evenement) => {
    evenement.preventDefault();

   if (!valeurInput.trim()) {
      setMsgAlerte('⚠️ Attention : la tâche ne peut pas être vide !');
    } else {
      onAdd(valeurInput);
      setValeurInput('');
      setMsgAlerte('');
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <form onSubmit={gererValidation} style={{ display: 'flex', justifyContent: 'center' }}>
        <input
          value={valeurInput}
          onChange={(evenement) => {
            setValeurInput(evenement.target.value);
            if (msgAlerte) setMsgAlerte('');
          }}
          placeholder="✍️ Ajouter une mission..."
          style={{
            width: '250px',
            outline: 'none',
            padding: '10px',
            borderRadius: '5px 0 0 5px',
            border: msgAlerte ? '2px solid #e74c3c' : '2px solid #3498db'
          }}
        />
        <button type="submit" style={{
          cursor: 'pointer',
          fontWeight: 'bold',
          padding: '10px 20px',
          backgroundColor: '#3498db',
          color: 'white',
          border: '2px solid #3498db',
          borderRadius: '0 5px 5px 0'
        }}>
          GO !
        </button>
      </form>
      {msgAlerte ? <p style={{ color: '#e74c3c', fontSize: '14px', marginTop: '8px', fontWeight: 'bold' }}>{msgAlerte}</p> : null}
    </div>
  );
};

export default TodoForm;