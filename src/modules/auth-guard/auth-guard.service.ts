import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
@Injectable()
export class AuthGuardService {
  verifyToken(token: string): boolean {
    try {
      jwt.verify(token.replace('Bearer ', ''), process.env.SECRET);
      return true;
    } catch (error) {
      throw new UnauthorizedException('Token inválido');
    }
  }
}
