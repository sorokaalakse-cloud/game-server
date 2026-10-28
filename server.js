const { PeerServer } = require('peer');

const port = process.env.PORT || 9000;

PeerServer({
  port: port,
  path: '/myapp'
});

console.log('Сервер запущен на порту ' + port);
