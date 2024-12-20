import { Migration } from '../Migration';
import { connectToDatabase } from '../../db';

export class CreateBookings extends Migration {
    version = 3;
    description = 'Create bookings collection';

    async up(): Promise<void> {
        const { db } = await connectToDatabase();
        console.log('Connected to database for bookings collection creation');

        const collections = await db.listCollections().toArray();
        const collectionNames = collections.map(col => col.name);

        if (!collectionNames.includes('bookings')) {
            console.log('Creating bookings collection...');
            await db.createCollection('bookings');
            console.log('Bookings collection created successfully');
        } else {
            console.log('Bookings collection already exists');
        }

        await db.collection('bookings').createIndex({ email: 1 });
        await db.collection('bookings').createIndex({ createdAt: -1 });
        console.log('Indexes created successfully');
    }

    async down(): Promise<void> {
        const { db } = await connectToDatabase();
        await db.collection('bookings').drop();
        console.log('Bookings collection dropped');
    }
} 