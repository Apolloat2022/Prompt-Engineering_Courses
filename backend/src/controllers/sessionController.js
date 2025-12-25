const pool = require('../models/db'); // Assuming pg pool setup

exports.createSession = async (req, res) => {
    const { title, session_type, start_time, end_time, capacity } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO Sessions (title, session_type, start_time, end_time, capacity) VALUES (, , , , ) RETURNING *',
            [title, session_type, start_time, end_time, capacity]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.bookSession = async (req, res) => {
    const { userId, sessionId } = req.body;
    try {
        await pool.query('INSERT INTO Bookings (user_id, session_id) VALUES (, )', [userId, sessionId]);
        res.status(200).json({ message: 'Session booked successfully' });
    } catch (err) {
        res.status(400).json({ error: 'Session full or already booked' });
    }
};
