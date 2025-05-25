const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const connectDatabase = require('./src/config/database');
const authRoutes = require('./src/routes/authRoutes');
const aporteRoutes = require('./src/routes/aporteRoutes');
const pontosRoutes = require('./src/routes/pontosRoutes');
const autenticar = require('./src/middlewares/authMiddleware');

const app = express();

app.use(cors());
app.use(express.json());

connectDatabase();

app.use('/api/auth', authRoutes);
app.use('/api/aportes', autenticar, aporteRoutes);
app.use('/api/pontos', autenticar, pontosRoutes);

app.get('/api/hello', (req, res) => {
  res.send({ message: 'Olá, PontoFuturo está no ar!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});