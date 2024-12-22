import dotenv from 'dotenv';
import { CreateUsers } from './migrations/001_create_users';
import { CreateAdminUser } from './migrations/002_create_admin_user';
import { CreateBookings } from './migrations/003_create_bookings';

// Load environment variables
dotenv.config();

async function migrate() {
    try {

        // Array of migrations to run in order
        const migrations = [
            new CreateUsers(),
            new CreateAdminUser(),
            new CreateBookings()
        ];

        // Run each migration
        for (const migration of migrations) {
            console.log(`Running migration: ${migration.description}`);
            await migration.up();
            console.log(`Completed migration: ${migration.description}`);
        }

        console.log('All migrations completed successfully');
        process.exit(0);
    } catch (error) {
        console.error('Migration failed:', error);
        process.exit(1);
    }
}

migrate();