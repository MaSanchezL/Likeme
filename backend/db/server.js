const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'likeme',
  password: 'postgres',
  port: 5432,
});

pool.connect((err, client, done) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
  } else {
    console.log('Conectado a la base de datos PostgreSQL');
    done();
  }
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};