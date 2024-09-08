import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return { message: 'Signed up' };
  }

  signin() {
    return { message: 'logged in' };
  }
}
