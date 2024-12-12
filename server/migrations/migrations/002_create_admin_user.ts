import { Migration } from '../Migration';
import { connectToDatabase } from '../../db';
import bcrypt from 'bcrypt';

export class CreateAdminUser extends Migration {
    version = 2;
    description = 'Create admin user';

    async up(): Promise<void> {
        const { db } = await connectToDatabase();
        console.log('Connected to database for admin user creation');

        const existingUser = await db.collection('users').findOne({ username: 'influxo' });
        if (existingUser) {
            console.log('Admin user already exists, skipping creation');
            return;
        }

        const hashedPassword = await bcrypt.hash('123123123', 10);

        const result = await db.collection('users').insertOne({
            username: 'influxo',
            email: 'influxoks@gmail.com',
            password: hashedPassword,
            role: 'admin'
        });

        if (result.insertedId) {
            console.log('Admin user created successfully');
        } else {
            console.error('Failed to create admin user');
        }
    }

    async down(): Promise<void> {
        const { db } = await connectToDatabase();
        await db.collection('users').deleteOne({ username: 'influxo' });
    }
} 