const Database = require('better-sqlite3');
const db = new Database('myapp.db');

// Create a table
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    name TEXT,
    email TEXT
  )
`);

// Insert a row
db.prepare('INSERT INTO users (name, email) VALUES (?, ?)')
  .run('Sam', 'sam@example.com');

// Read rows
const users = db.prepare('SELECT * FROM users').all();
console.log(users);
// [ { id: 1, name: 'Sam', email: 'sam@example.com' } ]
