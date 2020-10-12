import { User } from './../users/models/user.interface';
const jwt = require('jsonwebtoken');
const config = require('config');

export function tokeSign(user: User) {
  return jwt.sign({ user }, config.get('jwt'));
}
