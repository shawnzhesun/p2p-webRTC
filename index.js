const express = require('express');
const peer = require('peer');
const app = express();
const port = 3001;

const server = app.listen(port, () => {
  console.log(`p2p-webRTC server listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.send(`p2p-webRTC server has started.`);
});

const peerServer = peer.ExpressPeerServer(server, {
  debug: true,
});

peerServer.on('connection', (client) => {
  console.log("Client joins the connection: " + client.getId());
});

peerServer.on('disconnect', (client) => {
  console.log("Client left the connection: " + client.getId());
});

app.use('/peerjs', peerServer);