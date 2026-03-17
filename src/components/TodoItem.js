function TodoItem({ tache, changerEtat, supprimerTache }) {
  return (
    <li style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '10px', marginBottom: '10px',
      backgroundColor: tache.terminee ? '#e8f6f3' : '#fff',
      borderLeft: tache.terminee ? '5px solid #2ecc71' : '5px solid #3498db',
      borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', listStyle: 'none'
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="checkbox"
          checked={tache.terminee}
          onChange={() => changerEtat(tache.id)}
          style={{ marginRight: '15px', cursor: 'pointer', transform: 'scale(1.2)' }}
        />
        <span style={{
          textDecoration: tache.terminee ? 'line-through' : 'none',
          color: tache.terminee ? '#7f8c8d' : '#2c3e50',
          fontSize: '18px'
        }}>
          {tache.texte}
        </span>
      </div>
      <button
        onClick={() => supprimerTache(tache.id)}
        style={{
          backgroundColor: '#e74c3c', color: 'white', border: 'none',
          padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold'
        }}
      >
        X
      </button>
    </li>
  );
}

export default TodoItem;