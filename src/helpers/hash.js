import bcrypt from "bcryptjs";

const SALT = 10;

export async function hashPassword(password) {
  return await bcrypt.hash(password, SALT);
}

export async function comparePassword(password, hash) {
  return await bcrypt.compare(password, hash);
}
