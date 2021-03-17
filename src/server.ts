import { createExpressServer } from 'routing-controllers';
import { LoggingMiddleware } from './middleware/LoggingMiddleware';

// creates express app, registers all controller routes and returns you express app instance

export const app = createExpressServer({
  controllers: [__dirname + '/controllers/*.ts'], // we specify controllers we want to use
  middlewares: [LoggingMiddleware]
});