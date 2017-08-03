import express from 'express';
import http from 'http';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../webpack/webpack.config.babel';

import Sockets from './sockets';

/**
 * The server.
 *
 * @class Server
 */
export default class Server {


  /**
   * Bootstrap the server
   */
  static bootstrap() {
    return new Server();
  }

  /**
   * Constructor.
   * @constructor
   */
  constructor() {
    this.startup();
  }

  async startup() {
    this.app = express();
    this.server = http.Server(this.app);
    this.sockets = new Sockets(this.server);
    this.setWebpackCompiler();
    this.setPortListener();
  }

  setWebpackCompiler() {
    let compiler = webpack(webpackConfig);
    this.app.use(webpackDevMiddleware(compiler, {
      noInfo: false,
      quiet: false,
      publicPath: webpackConfig.output.publicPath,
      hot: true,
      stats: {
        colors: true
      }
    }));
    this.app.use(webpackHotMiddleware(compiler));
  }

  setPortListener() {
    this.server.listen(3333, () => {
      console.log('server ready at: localhost:3333');
    });
  }

}

Server.bootstrap();
