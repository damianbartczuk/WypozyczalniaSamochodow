import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private jwtHelper: JwtHelperService,
              private http: HttpClient) {
  }

  authorizeWithUsernameAndPassword(username: string, password: string) {

    let params = new URLSearchParams();
    params.append('username', 'dbartczuk');
    params.append('password', '0001');
    params.append('grant_type','password');
    params.append('client_id','fooClientIdPassword');
    let headers =
      new HttpHeaders({
        'Content-Type': 'application/json'});

    return this.http.post<string>('http://localhost:9090/authenticate', {
        username: username,
         password: password,
      }, {headers: headers});
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
