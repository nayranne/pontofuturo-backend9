const mongoose = require('mongoose');

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('🟢 Banco de dados conectado com sucesso!');
  } catch (error) {
    console.error('🔴 Erro na conexão com o banco de dados:', error);
    process.exit(1);
  }
};

module.exports = connectDatabase;