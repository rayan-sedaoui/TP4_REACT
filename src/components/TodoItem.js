const TodoItem = ({ element, basculer, retirer }) => {
  const { id, contenu, estFinie } = element;

  return (
    <li style={{
      listStyle: 'none',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      borderRadius: '4px',
      borderLeft: estFinie ? '5px solid #2ecc71' : '5px solid #3498db',
      backgroundColor: estFinie ? '#e8f6f3' : '#fff',
      marginBottom: '10px',
      padding: '10px',
      justifyContent: 'space-between',
      alignItems: 'center',
      display: 'flex'
    }}>
      <div style={{ alignItems: 'center', display: 'flex' }}>
        <input
          type="checkbox"
          checked={estFinie}
          onChange={() => basculer(id)}
          style={{ transform: 'scale(1.2)', cursor: 'pointer', marginRight: '15px' }}
        />
        <span style={{
          fontSize: '18px',
          color: estFinie ? '#7f8c8d' : '#2c3e50',
          textDecoration: estFinie ? 'line-through' : 'none'
        }}>
          {contenu}
        </span>
      </div>
      <button
        onClick={() => retirer(id)}
        style={{
          fontWeight: 'bold', cursor: 'pointer', borderRadius: '4px',
          padding: '5px 10px', border: 'none', color: 'white', backgroundColor: '#e74c3c'
        }}
      >
        X
      </button>
    </li>
  );
};

export default TodoItem;