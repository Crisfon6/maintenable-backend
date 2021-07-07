import {ChangeDetectorRef, Component} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';



@Component({
    selector: 'accident-root',
    templateUrl: './accident.component.html',
    styleUrls: [ './accident.component.css']
})
export class AccidentComponent{
    
  mobileQuery : MediaQueryList;
  private _mobileQueryListener: () =>void;
  constructor(changeDetectorRef:ChangeDetectorRef,media:MediaMatcher,private authService:AuthService,private _router:Router){
   this.mobileQuery = media.matchMedia('(max-width:600px)');
   this._mobileQueryListener = () => changeDetectorRef.detectChanges();
   this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnDestroy():void{
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  logout(){
 this.authService.logout();
 this._router.navigateByUrl('/inicio');
  }
}