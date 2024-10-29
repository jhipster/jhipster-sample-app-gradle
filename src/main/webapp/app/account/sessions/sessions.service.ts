import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { Session } from './session.model';

@Injectable({ providedIn: 'root' })
export class SessionsService {
  private readonly http = inject(HttpClient);
  private readonly applicationConfigService = inject(ApplicationConfigService);

  private resourceUrl = this.applicationConfigService.getEndpointFor('api/account/sessions');

  findAll(): Observable<Session[]> {
    return this.http.get<Session[]>(this.resourceUrl);
  }

  delete(series: string): Observable<{}> {
    return this.http.delete(`${this.resourceUrl}/${series}`);
  }
}
