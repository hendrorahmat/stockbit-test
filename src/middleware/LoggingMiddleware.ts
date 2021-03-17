import { ExpressMiddlewareInterface, Middleware } from "routing-controllers";
import LogRepository from "../repositories/LogRepository";

@Middleware({ type: 'before' })
export class LoggingMiddleware implements ExpressMiddlewareInterface {
  use(request: any, _response: any, next: any): void {
    const logRepository = new LogRepository();

    logRepository.create({
        endpoint: request.url,
        created_at: new Date(),
        updatd_at: new Date(),
        query_param: JSON.stringify(request.query)
    });

    next();
  }
}