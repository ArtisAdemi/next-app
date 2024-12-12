import { MongoClient, Db } from 'mongodb';

let db: Db | null = null;
let client: MongoClient | null = null;

export const connectToDatabase = async () => {
    if (db && client) {
        return { db, client };
    }

    if (!process.env.CONNECTION_STRING || !process.env.DB_NAME) {
        throw new Error('Database connection parameters not found in environment variables');
    }

    try {
        client = await MongoClient.connect(process.env.CONNECTION_STRING);
        db = client.db(process.env.DB_NAME);
        console.log('Successfully connected to MongoDB.');
        return { db, client };
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        throw error;
    }
}

export const getDb = () => {
    if (!db) {
        throw new Error('Database not initialized. Call connectToDatabase first.');
    }
    return db;
} 