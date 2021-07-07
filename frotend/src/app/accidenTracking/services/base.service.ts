import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BaseService {
    baseUrl:string;
    constructor(public sufix :string,public http:any){
      this.baseUrl =environment.baseUrl+'/'+this.sufix;
    }

    getById (id:string): Observable<any> {
      return this.http.get(this.baseUrl+`/id/${id}`);
    }
    get(mean: string, skip = 0, limit = 30): Observable<any> {
     
        return this.http
          .get(
            this.baseUrl +
              `/?mean=${mean}&skip=${skip}&limit=${limit}`,
          );
          // .pipe(map((res:any) => res['items']));
      }
      create  (data): Observable<any>{
        return this.http.post(this.baseUrl,data);
      }
   update(id:String,data)    : Observable<any> {
     return this.http.put(this.baseUrl+`/${id}`,data)
   }
   disable(id:String)    : Observable<any> {
    return this.http.put(this.baseUrl+`/disable/${id}`)
  }
  delete(id:String,)    : Observable<any> {
    return this.http.put(this.baseUrl+`/${id}`)
  }
}