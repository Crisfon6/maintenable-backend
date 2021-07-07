import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl: string;
  constructor(private _http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }
  get(mean = '', skip = 0, limit = 30): Observable<any> {
    const headers = new HttpHeaders({
      skip: String(skip),
      limit: String(limit),
      mean,
    });

    return this._http.get(
      this.baseUrl + `/user/?mean=${mean}&skip=${skip}&limit=${limit}`,
      { headers }
    );
  }

  getById(id:string):Observable<any>{
    const url = `${this.baseUrl}/user/id/${id}`;
   return this._http.get(url);
}

delete(id:string):Observable<any>{
  const url = `${this.baseUrl}/user/delete/${id}`;
  return this._http.delete(url);
}


  create(data:any) {
    
    return this._http.post(this.baseUrl + '/user', data);
  }

  
}
