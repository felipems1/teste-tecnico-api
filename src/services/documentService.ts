import { Document } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

let documents: Document[] = [];

export const createDocument = async (name: string, status: string, userId: string) => {
    const newDocument: Document = {
        id: uuidv4(),
        name,
        status,
        userId,
    };
    documents.push(newDocument);
    return newDocument;
};

export const findAllDocuments = async () => {
    return documents;
};

export const findDocumentsByUserId = async (userId: string) => {
  return documents.filter(doc => doc.userId === userId);
};

export const updateDocument = async (id: string, name: string, status: string) => {
    const index = documents.findIndex(doc => doc.id === id);
    if (index === -1) return null;

    documents[index] = { ...documents[index], name, status };
    return documents[index];
};

export const deleteDocument = async (id: string) => {
    documents = documents.filter(doc => doc.id !== id);
};
