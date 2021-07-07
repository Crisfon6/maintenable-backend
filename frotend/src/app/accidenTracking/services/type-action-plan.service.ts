import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TypeActionPlanService {

  private baseUrl =environment.baseUrl+'/typeActionPlan';
  constructor(private _http:HttpClient) { }
  create(data:any) :Observable<any>{
    return this._http.post(this.baseUrl,data);
  }



  get(mean = '', skip = 0, limit = 30): Observable<any> {
 
    return this._http.get(
      this.baseUrl + `/?mean=${mean}&skip=${skip}&limit=${limit}`,
     
    );
  }

  getById(id:string):Observable<any>{
    const url = `${this.baseUrl}/id/${id}`;
   return this._http.get(url);
}
update(id:string,data:any):Observable<any>{
  const url = `${this.baseUrl}/update/${id}`;
 return this._http.put(url,data);
}
delete(id:string):Observable<any>{
  const url = `${this.baseUrl}/delete/${id}`;
 return this._http.delete(url);
}



}
