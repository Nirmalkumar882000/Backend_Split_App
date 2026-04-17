const ActivityLog = require('../models/ActivityLog');
const { mysqlPool } = require('../config/db');

/**
 * Logs user activity to MongoDB and MySQL for dual persistence and high-fidelity tracking.
 * @param {number} userId - The ID of the user performing the action.
 * @param {string} action - The type of action (e.g., 'CREATE_GROUP', 'ADD_EXPENSE').
 * @param {string|object} details - Additional telemetry data for the log.
 */
const logActivity = async (userId, action, details) => {
    try {
        const detailString = typeof details === 'object' ? JSON.stringify(details) : details;

        // 1. Persistence Alpha: MongoDB (Rich telemetry & easy scaling)
        const mongoLog = new ActivityLog({
            user_id: userId,
            action: action,
            data: details
        });
        await mongoLog.save();

        // 2. Persistence Beta: MySQL (Relational consistency for core reports)
        await mysqlPool.query(
            'INSERT INTO splits_activity_logs (user_id, action, details) VALUES (?, ?, ?)',
            [userId, action, detailString]
        );

        console.log(`\x1b[32m✔ Activity Logged [${action}]: User ${userId}\x1b[0m`);
    } catch (err) {
        console.error('\x1b[31m✘ Activity Logging Error:\x1b[0m', err.message);
    }
};

module.exports = { logActivity };
