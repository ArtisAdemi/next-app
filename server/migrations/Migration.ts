export abstract class Migration {
    abstract up(): Promise<void>;
    abstract down(): Promise<void>;
    abstract description: string;
    abstract version: number;
} 