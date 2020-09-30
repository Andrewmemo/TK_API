const jwt = require('jsonwebtoken');
const config = require('config');

export function tokeSign(id) {
  return jwt.sign({ _id: id }, config.get('jwt'));
}
