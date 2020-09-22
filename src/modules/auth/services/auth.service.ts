import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

    // url: string = "http://localhost:80/ci_rest_jwt/account/";
    url: string = "http://development.istop.us/api/account/";

    constructor(private http: HttpClient) {}

    getAuth$(email: string, password: string): Observable<{}> {
        let body = {
            email : email,
            password: password,
            username: 'admin',
            role: 'admin'
        };
        return this.http.post<any>(this.url + "login", body);

        // return of({});
    }
}
