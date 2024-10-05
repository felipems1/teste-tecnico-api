import { User } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

let users: User[] = [];

export const createUser = async (name: string, email: string) => {
    const newUser: User = {
        id: uuidv4(),
        name,
        email,
    };
    users.push(newUser);
    return newUser;
};

export const findAllUsers = async () => {
    return users;
};

export const findUserById = async (id: string) => {
    return users.find(user => user.id === id);
};

export const updateUser = async (id: string, name: string, email: string) => {
    const index = users.findIndex(user => user.id === id);
    if (index === -1) return null;

    users[index] = { ...users[index], name, email };
    return users[index];
};

export const deleteUser = async (id: string) => {
    users = users.filter(user => user.id !== id);
};

