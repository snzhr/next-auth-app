import jwt, { JwtPayload } from 'jsonwebtoken';
import { SECRET_KEY } from './secretToken';
import { IUser } from '@/models/user';

type verificationResponse = {
  user: Partial<IUser> | null;
  error: any;
}

export function verifyToken(token:string): verificationResponse {
  try {
    const decoded = jwt.verify(token, SECRET_KEY) as JwtPayload;
    return { user: {name: decoded?.name}, error: null };
  } catch (error) {
    return { user: null, error };
  }
}