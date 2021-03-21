import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApplicationConfigService } from '../config/application-config.service';
import { Login } from 'app/login/login.model';

@Injectable({ providedIn: 'root' })
export class AuthServerProvider {
  constructor(private http: HttpClient, private applicationConfigService: ApplicationConfigService) {}

  login(credentials: Login): Observable<{}> {
    const data =
      `username=${encodeURIComponent(credentials.username)}` +
      `&password=${encodeURIComponent(credentials.password)}` +
      `&remember-me=${credentials.rememberMe ? 'true' : 'false'}` +
      '&submit=Login';

    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(this.applicationConfigService.getEndpointFor('api/authentication'), data, { headers });
  }

  logout(): Observable<void> {
    // logout from the server
    return this.http.post(this.applicationConfigService.getEndpointFor('api/logout'), {}).pipe(
      map(() => {
        // to get a new csrf token call the api
        this.http.get(this.applicationConfigService.getEndpointFor('api/account')).subscribe();
      })
    );
  }
}
