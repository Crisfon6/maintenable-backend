import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userToken: string = '';
  private baseUrl: string;
  constructor(private http: HttpClient) {
    
    this.baseUrl = environment.baseUrl+'/auth';
    this.readToken();
  }
  logout() {
    localStorage.removeItem('token');
    this.userToken = '';
  }
  login(data:any): Observable<any> {
    return this.http.post(this.baseUrl + '/login', data).pipe(
      map((resp:any) => {
        this.saveToken(String(resp['token']),);
        return resp;
      })
    );
  }
  private saveToken(idToken: any,) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
  }
  readToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token') || '';
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }
 
  isAuthenticated(): boolean {    
    return this.userToken.length > 2;
  }
  isAdmin():Observable<any>{
    return this.http.get(this.baseUrl+'/isAdmin')
    // .pipe(
    //   map((resp:any) => {
    //     this.isAdmin =true;
    //     return resp;
    //   }
    //   )
    // );
  }
  getToken():string{return this.userToken};
}
