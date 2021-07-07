import { Injectable } from '@angular/core';
import {  CanActivate, } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {
  constructor(private authSerivce:AuthService){

  }
  isAdmin =false;
  canActivate(
    ): boolean {
      
    this.authSerivce.isAdmin().subscribe(data=>{
    this.isAdmin =true;
    },err=>{
      this.isAdmin=false;
    });      
    return this.isAdmin;
  }
  
}
