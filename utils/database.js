import mongoose from 'mongoose';

const db = mongoose.connection;

import credentials from './credentials.js';

const { password, name, host, user } = credentials.database;

const connectionConfig = [
  `mongodb+srv://${user}:${password}@${host}/${name}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
];

db.on('connecting', () => {
  console.log('Conectándose a la base de datos...');
});

db.on('error', (error) => {
  console.error('❌ en MongoDB: ' + error);
  mongoose.disconnect();
});
db.on('connected', () => {
  console.log('✅ Base de datos conectada!');
});
db.once('open', () => {
  console.log('Conexión abierta con MongoDB!');
});
db.on('reconnected', () => {
  console.log('MongoDB reconectado!');
});
db.on('disconnected', () => {
  console.log('MongoDB desconectado!');
  console.log('Reintentando conexión en 5 segundos');
  setTimeout(init, 5000);
});

export default function init() {
  mongoose.connect(...connectionConfig);
}
