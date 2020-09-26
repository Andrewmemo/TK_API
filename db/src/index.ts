import { Initial } from './initial';
import 'reflect-metadata';
import { createConnection } from 'typeorm';

createConnection()
  .then(async connection => {
    await Initial().catch(err => console.log(err));
    console.log('DB index...');
  })
  .catch(error => console.log(error));
