import { Role } from './entity/Role';

export const Initial = async () => {
  await Role.create({
    name: 'coach',
  }).save();

  await Role.create({
    name: 'athlete',
  }).save();

  await Role.create({
    name: 'assistant',
  }).save();
};
