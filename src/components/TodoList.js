import TodoItem from './TodoItem';

const TodoList = ({ liste, onToggle, onDelete }) => {

  if (liste.length === 0) {
    return <p style={{ color: '#bdc3c7', fontStyle: 'italic', marginTop: '20px' }}>Aucune mission pour le moment...</p>;
  }

  return (
    <ul style={{ marginTop: '20px', padding: 0 }}>
      {liste.map((item) => (
        <TodoItem
          key={item.id}
          element={item}
          basculer={onToggle}
          retirer={onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;