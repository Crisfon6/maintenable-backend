import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';

@Injectable({
    providedIn: 'root'
})
export class EvidenceReportService extends BaseService{

    constructor(http:HttpClient) {
      super('evidenceReport',http);
     }
     getInfoForCreate():Observable<any>{
        return this.http.get(this.baseUrl+'/create');
    }
   
  }
// 