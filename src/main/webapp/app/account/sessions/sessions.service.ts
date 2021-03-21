import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { Session } from './session.model';

@Injectable({ providedIn: 'root' })
export class SessionsService {
  public resourceUrl = this.applicationConfigService.getEndpointFor('api/account/sessions/');

  constructor(private http: HttpClient, private applicationConfigService: ApplicationConfigService) {}

  findAll(): Observable<Session[]> {
    return this.http.get<Session[]>(this.resourceUrl);
  }

  delete(series: string): Observable<{}> {
    return this.http.delete(`${this.resourceUrl}${series}`);
  }
}
