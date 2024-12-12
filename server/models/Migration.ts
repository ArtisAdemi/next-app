import { Schema, model } from 'mongoose';

interface IMigration {
    version: number;
    description: string;
    executedAt: Date;
}

const migrationSchema = new Schema<IMigration>({
    version: { type: Number, required: true, unique: true },
    description: { type: String, required: true },
    executedAt: { type: Date, default: Date.now }
});

export const MigrationModel = model<IMigration>('Migration', migrationSchema); 