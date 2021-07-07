import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AccidentTrackingService {
  private baseUrl = environment.baseUrl+'/accidentTracking';
  constructor(private _http: HttpClient) {}
  create(data:any): Observable<any> {
    return this._http.post(this.baseUrl, data);
  }

getById(id:string){
  return this._http.get(this.baseUrl + '/id/'+id);
}
// {{url}}/accidentTracking/?mean=&from=0&limit=30
  get(mean: string, skip = 0, limit = 30): Observable<any> { 
 
    return this._http
      .get(
        this.baseUrl+'?mean=&skip=0&limit=30',
      )
      .pipe(map((res:any) => res['items']));
  }
  getInfoForCreate(): Observable<any> {
    return this._http.get(this.baseUrl + '/get');
  }
  update(id:string,data:any):Observable<any>{
    return this._http.put(this.baseUrl+'/update/'+id,data);
  }
  delete(id:string):Observable<any>{
    return this._http.delete(this.baseUrl+'/delete/'+id);
  }

  getCSV(ids:string[]):Observable<any>{
return this._http.post(this.baseUrl+'/csv/',{ids},{ responseType: 'blob'});
  }
}
