import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent  {

  
  cols = {
    big: {
      total : 8,
      image: 6,
      side : 2
    },
    small : {
      total: 8,
      image:0,
      side:8
    }
  } 

  mobileQuery : MediaQueryList;
 private _mobileQueryListener: () =>void;
 constructor(changeDetectorRef:ChangeDetectorRef,media:MediaMatcher){
  this.mobileQuery = media.matchMedia('(max-width:1100px)');
  this._mobileQueryListener = () => changeDetectorRef.detectChanges();
  this.mobileQuery.addListener(this._mobileQueryListener);
 }
 ngOnDestroy():void{
   this.mobileQuery.removeListener(this._mobileQueryListener);
 }


}
