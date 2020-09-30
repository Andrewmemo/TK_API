const bcrypt = require('bcrypt');

export async function unhashed(user_password, db_password): Promise<boolean> {
  return await bcrypt.compare(user_password, db_password);
}
