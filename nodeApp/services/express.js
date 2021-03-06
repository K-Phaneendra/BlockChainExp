import express from 'express';
import bodyParser from 'body-parser';
import { errorHandler as queryErrorHandler } from 'querymen';
import { errorHandler as bodyErrorHandler } from 'bodymen';

export default routes => {
  const app = express();

  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(routes);
  app.use(queryErrorHandler());
  app.use(bodyErrorHandler());

  // serve static files present in folder ../public
  app.use(express.static('public'));
  return app;
};
