const { query } = require('../db/server'); 

// Obtener POST
const getPosts = async (req, res) => {
  try {
    const result = await query('SELECT * FROM posts ORDER BY id DESC');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error al obtener los posts:', error);
    res.status(500).send('Error interno del servidor');
  }
};

// Crear un nuevo post
const createPost = async (req, res) => {
  const { titulo, url, descripcion } = req.body;
  const likes = 0; 

  if (!titulo || !url || !descripcion) {
    return res.status(400).send('Faltan campos obligatorios: título, URL o descripción');
  }

  try {
    const text = 'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [titulo, url, descripcion, likes];
    const result = await query(text, values);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error al crear el post:', error);
    res.status(500).send('Error interno del servidor');
  }
};

module.exports = {
  getPosts,
  createPost,
};