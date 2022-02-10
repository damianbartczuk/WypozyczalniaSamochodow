import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtResponse} from '../modele/JwtResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly AUTHENTICATE_URL = 'http://localhost:8080/authenticate';
  private readonly FRONT_URL = 'http://localhost:4200';

  constructor(private jwtHelper: JwtHelperService,
              private http: HttpClient) {
  }

  authorizeWithUsernameAndPassword(username: string, password: string) {
    let headers =
      new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      );
    return this.http.post<JwtResponse>(this.AUTHENTICATE_URL, {
      username: username,
      password: password,
    }, {headers: headers});
  }

}
