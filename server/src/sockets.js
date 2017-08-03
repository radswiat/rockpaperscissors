import io from 'socket.io';

export default class Sockets {

  constructor(serverHttp) {
    this.io = io(serverHttp);
    this.io.on('connection', this.onNewConnection.bind(this));
  }

  onNewConnection(client) {
    // listen for select:gesture event
    // - trigger when gesture is selected
    client.on('select:gesture', (gesture) => {
      // broadcast to all except sender
      client.broadcast.emit('selected:gesture', gesture);
    });
  }

}
