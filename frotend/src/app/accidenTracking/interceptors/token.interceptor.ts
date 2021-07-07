import { HttpErrorResponse, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

  constructor(private auth:AuthService) { }

  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<any>{
    const token = this.auth.getToken();
    // const headers = new HttpHeaders ({
    //   'Authorization': token
    // });
    const reqClone = req.clone({
      setHeaders : {
        'Authorization': token
      }
    });
    return next.handle(reqClone);
    // const token = localStorage.getItem('token');
    
  }
  
}
