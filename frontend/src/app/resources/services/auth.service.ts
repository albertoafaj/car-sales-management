import { Injectable } from '@angular/core';
import { ResponseLogin } from '../models/ResponseLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  public loginResponse: ResponseLogin | undefined;

  public clear() {
    this.loginResponse = undefined;
  };

  public isAuthenticated(): boolean {
    return Boolean(this.loginResponse?.jwt);
  }
}
