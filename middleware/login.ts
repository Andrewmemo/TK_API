import { Request, Response } from 'express';
import { Injectable, NestMiddleware } from '@nestjs/common';

const jwt = require('jsonwebtoken');
const config = require('config');

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(request: Request, response: Response, next: Function) {
    const token = request.header('tk-login-token');

    if (!token)
      return response.status(401).send('Access denied. No token provided');

    try {
      jwt.verify(token, config.get('jwt'));
      next();
    } catch (ex) {
      response.status(400).send('Invalod token.');
    }
  }
}
