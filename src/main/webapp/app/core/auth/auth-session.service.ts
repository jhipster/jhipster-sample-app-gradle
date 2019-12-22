import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';
import { Login } from 'app/core/login/login.model';

export const LOGOUT_URL = SERVER_API_URL + 'api/logout';

@Injectable({ providedIn: 'root' })
export class AuthServerProvider {
  constructor(private http: HttpClient) {}

  login(credentials: Login): Observable<{}> {
    const data =
      `username=${encodeURIComponent(credentials.username)}` +
      `&password=${encodeURIComponent(credentials.password)}` +
      `&remember-me=${credentials.rememberMe}` +
      '&submit=Login';

    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(SERVER_API_URL + 'api/authentication', data, { headers });
  }

  logout(): Observable<void> {
    // logout from the server
    return this.http.post(LOGOUT_URL, {}).pipe(
      map(() => {
        // to get a new csrf token call the api
        this.http.get(SERVER_API_URL + 'api/account').subscribe();
      })
    );
  }
}
