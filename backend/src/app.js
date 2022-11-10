const express = require('express');

const app = express();
app.use(express.json());

const gameRoutes = require('./routes/gameRoutes');
const userRoutes = require('./routes/userRoutes');

const port = 3333;

app.use('/api/v1', gameRoutes);
app.use('/api/v1', userRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
