
import { SHA256 } from 'crypto-js';
export async function hashPassword(password) {
    const hashedPassword =  SHA256(password).toString()

    return hashedPassword
  }