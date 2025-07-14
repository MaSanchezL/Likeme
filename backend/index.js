const express = require('express');
const cors = require('cors');
const { getPosts, createPost } = require('./controllers/postsController'); // Importamos las funciones del controlador

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// GET
app.get('/posts', getPosts);

// POST
app.post('/posts', createPost);

// Servidor
app.listen(PORT, () => {
  console.log(`Servidor backend de Like Me corriendo en http://localhost:${PORT}`);
});