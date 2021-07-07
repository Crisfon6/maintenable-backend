import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActionPlanService {

  private baseUrl =environment.baseUrl;
  constructor(private _http:HttpClient) { }
  // create(data) :Observable<any>{
  //   return this._http.post(this.baseUrl+'/typeActionPlan',data);
  // }
  // get() :Observable<any>{
  //   return this._http.get(this.baseUrl+'/typeActionPlan');
  // }
  getByAccident(id:string) :Observable<any>{
    return this._http.get(this.baseUrl+'/actionPlan/accident/'+id);
  }
  updateArray(id:string,data:any): Observable<any> {
    return this._http.put(this.baseUrl+'/update/array/'+id,{actionPlanArray:data})

  }
  update(id:string,data:any):Observable<any>{
    return this._http.put(this.baseUrl+'/update/'+id,data)
  }
  
}
