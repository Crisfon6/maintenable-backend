import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/accidenTracking/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateUserComponent implements OnInit {
  allowDelete=false;
title= "Crear usuario";
  form =  this._fb.group(
    {
      username: ['',Validators.required],
      password: ['',Validators.required],
      role: ['',Validators.required]
    }
  );
  constructor(private _fb :FormBuilder,private userService:UserService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    
    this.userService.create(this.form.value).subscribe(
      token=>{
    Swal.fire('Perfecto...', 'Registrado', 'success');
      },err=>{
        const error = err.error.msg[0].msg || err;
         Swal.fire('Oops...', error , 'error');
      }
    )
  }
  delete(){}
}
