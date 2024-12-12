import { Migration } from '../Migration';
import { connectToDatabase } from '../../db';

export class CreateUsers extends Migration {
    version = 1;
    description = 'Create users collection and indexes';

    async up(): Promise<void> {
        const { db } = await connectToDatabase();
        console.log('Connected to database for users collection creation');

        const collections = await db.listCollections().toArray();
        const collectionNames = collections.map(col => col.name);

        if (!collectionNames.includes('users')) {
            console.log('Creating users collection...');
            await db.createCollection('users');
            console.log('Users collection created successfully');
        } else {
            console.log('Users collection already exists');
        }

        await db.collection('users').createIndex({ email: 1 }, { unique: true });
        await db.collection('users').createIndex({ username: 1 }, { unique: true });
        console.log('Indexes created successfully');
    }

    async down(): Promise<void> {
        const { db } = await connectToDatabase();
        await db.collection('users').drop();
        console.log('Users collection dropped');
    }
} 