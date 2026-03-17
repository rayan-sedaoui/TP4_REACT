import TodoItem from './TodoItem';

function TodoList({ taches, changerEtat, supprimerTache }) {
  return (
    <ul style={{ padding: 0, marginTop: '20px' }}>
      {taches.length === 0 ? (
        <p style={{ color: '#bdc3c7', fontStyle: 'italic' }}>Aucune mission pour le moment...</p>
      ) : (
        taches.map((tache) => (
          <TodoItem
            key={tache.id}
            tache={tache}
            changerEtat={changerEtat}
            supprimerTache={supprimerTache}
          />
        ))
      )}
    </ul>
  );
}

export default TodoList;