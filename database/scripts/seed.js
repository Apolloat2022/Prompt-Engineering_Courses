const pool = require('../../backend/src/models/db');

const seedDatabase = async () => {
    try {
        console.log('🌱 Seeding Course Content...');

        // 1. Seed Level 1 Course
        await pool.query(\
            INSERT INTO Courses (title, level, modules) 
            VALUES (, , )\, 
            [
                'AI Communication Fundamentals', 
                'Beginner', 
                JSON.stringify([
                    { week: 1, title: 'Understanding the AI Mindset' },
                    { week: 2, title: 'The Anatomy of a Good Prompt' },
                    { week: 3, title: 'IT Management Applications' },
                    { week: 4, title: 'Evaluation and Implementation' }
                ])
            ]
        );

        // 2. Seed Starter Prompts for the Sandbox
        // (Create a table for these if you haven't yet, or store as JSON)
        
        console.log('✅ Seeding Complete!');
        process.exit();
    } catch (err) {
        console.error('❌ Seeding Failed:', err);
        process.exit(1);
    }
};

seedDatabase();
