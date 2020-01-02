import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtResponse} from '../JwtResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private jwtHelper: JwtHelperService,
              private http: HttpClient) {
  }

  authorizeWithUsernameAndPassword(username: string, password: string) {

    let headers =
      new HttpHeaders({
        'Content-Type': 'application/json',
      }
        );

    return this.http.post<JwtResponse>(UrlMapping.AUTHENTICATE_URL, {
        username: username,
         password: password,
      }, {headers: headers});
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
