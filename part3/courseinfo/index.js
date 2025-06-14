// Importa el módulo express y crea una instancia de la aplicación
const express = require("express");
const app = express();

//nos ayuda a acceder a la propiedad body
app.use(express.json());

// Datos simulados: lista de notas
let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true,
  },

  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

// Ruta raíz: responde con un mensaje HTML
app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

// Ruta para obtener todas las notas en formato JSON
app.get("/api/notes", (request, response) => {
  response.json(notes);
});

// Define el puerto en el que se ejecutará el servidor
const PORT = 3001;

//Ruta para obtener un solo recuero por id
app.get("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  const note = notes.find((note) => note.id === id);

  if (note) {
    response.json(note);
  } else {
    response.status(404).end("Resourse not found");
  }
});

//Elimina un solo recurso para un id
app.delete("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  notes = notes.filter((note) => note.id !== id);
  response.status(202).end();
});

//Agrega un recurso a notas
app.post("/api/notes", (request, response) => {
  const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;

  const note = request.body;
  note.id = maxId + 1;

  notes = notes.concat(note);

  response.json(note);
});

// Inicia el servidor y muestra un mensaje en consola
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
