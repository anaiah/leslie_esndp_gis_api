// db.js
const { Pool } = require('pg');

// Create a new pool instance with your database configuration
const pool = new Pool({
    user: 'neondb_owner',       // replace with your db username
    host: 'ep-hidden-violet-a1mkr8bm-pooler.ap-southeast-1.aws.neon.tech',           // e.g., localhost or your server IP
    database: 'ESNDP_GIS',   // your database name
    password: 'npg_DfzWU41bVKkS',   // your password
    port: 5432,                  // default postgres port
    max: 100,                     // max number of clients in pool
    idleTimeoutMillis: 30000,    // close idle clients after 30 seconds
    connectionTimeoutMillis: 2000 ,// return error after 2 sec if connection not established
    ssl: {
        rejectUnauthorized: false // or true, depending on your security needs
    }

});

// Export the pool for use in app
module.exports = {
  query: (text, params) => pool.query(text, params),
  getPool: () => pool // optional: access to the pool if needed
};

//query property is for const result = await db.query('SELECT * FROM users WHERE id = $1', [userId]);
//getpool method is for //const pool = db.getPool();