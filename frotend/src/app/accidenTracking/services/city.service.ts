import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CityService extends BaseService{

  constructor(http:HttpClient) {
    super('city',http);
   }

 
}