import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class SupervisorService extends BaseService{

  constructor(http:HttpClient) {
    super('supervisor',http);
   }

 
}