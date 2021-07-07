import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { UserService } from 'src/app/accidenTracking/services/user.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'edit-user',
    templateUrl: '../create/create.component.html',
    styleUrls: ['../create/create.component.css']
})
export class EditUserComponent implements OnInit {
  allowDelete=true;
    title = "Editar Usuario";
    // user;
    id:string;
    form =  this._fb.group(
        {
          username: ['',Validators.required],
          password: ['',Validators.required]
        }
      );
      constructor(private _fb :FormBuilder,private userService:UserService,private route: ActivatedRoute,private router:Router) { 
        this.id = this.route.snapshot.params.id;
        this.userService.getById(this.id).subscribe(user=> {
          this.form.setValue({
            username:user.user.username,
            password:''
          }
          );
        });
     
      }
      delete(){
        this.userService.delete(this.id).subscribe(d=>{
          Swal.fire('Perfecto...', 'Eliminado', 'success');
          this.router.navigateByUrl('/accidentes');
          
        },err=>{
        
          Swal.fire('Oops...', err.error.msg[0].msg, 'error');
        });
      }
      ngOnInit(): void {
        
      }
      onSubmit(){
        
        
      }
}
