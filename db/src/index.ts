import 'reflect-metadata';
import { createConnection } from 'typeorm';

createConnection()
  .then(async connection => {
    console.log('DB index...');
  })
  .catch(error => console.log(error));
