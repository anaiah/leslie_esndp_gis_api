// db.js
const { Pool } = require('pg');

// C reate a new pool instance with your database configuration
// ++++++++++++++this is for leslie esndp_gis database connection, you can create another pool for other database if needed
// const pool = new Pool({
//     user: 'neondb_owner',       // replace with your db username
//     host: 'ep-hidden-violet-a1mkr8bm-pooler.ap-southeast-1.aws.neon.tech',           // e.g., localhost or your server IP
//     database: 'ESNDP_GIS',   // your database name
//     password: 'npg_DfzWU41bVKkS',   // your password
//     port: 5432,                  // default postgres port
//     max: 100,                     // max number of clients in pool
//     idleTimeoutMillis: 30000,    // close idle clients after 30 seconds
//     connectionTimeoutMillis: 2000 ,// return error after 2 sec if connection not established
//     ssl: {
//         rejectUnauthorized: false // or true, depending on your security needs
//     }

// });
//postgresql://neondb_owner:npg_dehHG5Tv1Qbt@ep-green-brook-a4yscqsn-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
const pool = new Pool({
  user: 'neondb_owner',
  host: 'ep-green-brook-a4yscqsn-pooler.us-east-1.aws.neon.tech',
  database: 'neondb',                 // <-- from URL, not "BGC"
  password: 'npg_dehHG5Tv1Qbt',
  port: 5432,
  max: 100,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000,
  ssl: {
    require: true,
    rejectUnauthorized: false
  }
});

// Export the pool for use in app
module.exports = {
  query: (text, params) => pool.query(text, params),
  getPool: () => pool // optional: access to the pool if needed
};

//query property is for const result = await db.query('SELECT * FROM users WHERE id = $1', [userId]);
//getpool method is for //const pool = db.getPool();