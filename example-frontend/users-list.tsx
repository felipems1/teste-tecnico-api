import { useFetchUsers } from './useFetchUsers';

export function UsersList() {
  const { users, loading, error } = useFetchUsers();

  if (loading) return <p>Carregando...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Lista de Usuários</h1>
      {users.length === 0 ? (
        <p>Nenhum usuário encontrado.</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <strong>Nome:</strong> {user.name}
              <strong>Email:</strong> {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
