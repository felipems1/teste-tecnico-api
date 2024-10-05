import { useState, useEffect } from 'react';
import { User } from './user';

export const useFetchUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true)
      try {
        const response = await fetch('http://localhost:3333/users');
        if (!response.ok) {
          throw new Error('Erro ao buscar usuários');
        }
        const data = await response.json();
        setUsers(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, loading, error };
};
