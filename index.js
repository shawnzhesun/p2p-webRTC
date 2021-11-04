const express = require('express');
const app = express();
const port = 3001;

srv = app.listen(port, () => {
  console.log(`p2p-webRTC server listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.send('p2p-webRTC server has started.');
});

app.use('/peerjs', require('peer').ExpressPeerServer(srv, {
  debug: true
}));