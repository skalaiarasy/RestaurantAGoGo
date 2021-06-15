import { Injectable } from '@angular/core';

const loginKey = 'auth-token';
const userKey = 'auth-user';

@Injectable({
  providedIn: 'root'
})

export class DatastoreService {

  public getUser(): any {
    const user = window.sessionStorage.getItem(userKey);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(loginKey);
    window.sessionStorage.setItem(loginKey, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(loginKey);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(userKey);
    window.sessionStorage.setItem(userKey, JSON.stringify(user));
  }
}
