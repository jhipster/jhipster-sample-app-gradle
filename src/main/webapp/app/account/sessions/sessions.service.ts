import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Session } from './session.model';
import { SERVER_API_URL } from '../../app.constants';

@Injectable()
export class SessionsService {

    private resourceUrl = SERVER_API_URL + 'api/account/sessions/';
    constructor(private http: HttpClient) { }

    findAll(): Observable<Session[]> {
        return this.http.get<Session[]>(this.resourceUrl);
    }

    delete(series: string): Observable<HttpResponse<any>> {
        return this.http.delete(`${this.resourceUrl}${series}`, { observe: 'response' });
    }
}
