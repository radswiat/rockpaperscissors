import io from 'socket.io-client';

class Sockets {

  constructor() {
    this.client = io();
  }

  /**
   * Register listener for socket emits
   */
  on(eventName, cb) {
    this.client.on(eventName, cb);
  }

  /**
   * Register listener for socket emit
   * - it will be removed after first time
   * @param action
   * @param cb
   */
  once(action, cb) {
    if (!this.client) {
      return;
    }
    this.client.once(action, cb);
  }

  /**
   * Proxy for emit
   * - proxy emit with an handshake call
   * Do a clientHandshake, and when that is resolved,
   * make an emit
   * @param action
   * @param data
   */
  emit(action, data) {
    this.client.emit(action, data);
  }
}

export default new Sockets();
