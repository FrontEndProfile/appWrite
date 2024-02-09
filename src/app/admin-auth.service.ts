// admin-auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthService {
  private readonly adminUsername = '123';
  private readonly adminPassword = '123'; // Please use a secure way to store passwords in production

  authenticate(username: string, password: string): boolean {
    return username === this.adminUsername && password === this.adminPassword;
  }
}
