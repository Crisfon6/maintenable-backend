import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyInvolvedService {
  
  private baseUrl =environment.baseUrl+'/companyInvolved';
  constructor(private _http:HttpClient) { }
  create(data:any) :Observable<any>{
    return this._http.post(this.baseUrl,data);
  }
  get(mean = '', skip = 0, limit = 30) :Observable<any>{
    return this._http.get(
      this.baseUrl + `/?mean=${mean}&skip=${skip}&limit=${limit}`,
    );
  }
  
getById(id :string):Observable<any>{
  return this._http.get(this.baseUrl+'/id/'+id);
}
update(id:string,data:any ):Observable<any>{
  return this._http.put(this.baseUrl+'/update/'+id,data);
}
delete(id :string):Observable<any>{
  return this._http.delete(this.baseUrl+'/delete/'+id);
}
}

