import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

import { InjuredTypeService } from 'src/app/accidenTracking/services/injured-type.service';

@Component({
    templateUrl: '../../shared/ceratewithname/createwithname.component.html',
   
})
export class EditTypeInjuryComponent  {
    

    allowDelete=true;
    form = this.fb.group({
      name: ['', Validators.required],
    });
    title = 'Editar tipo de lesion';
    contractors = [];
    id:string;
    constructor(
      private service: InjuredTypeService,
      private fb: FormBuilder,
      private route: ActivatedRoute,
      private router:Router
    ) {
       this.id = this.route.snapshot.params.id;
      this.service.getById(this.id).subscribe((data) => {
        this.form.setValue({
          name:data.items.name
  
        })
      });
    }
    onSubmit() {
      const data = this.form.value;
      this.service.update(this.id,data).subscribe(
        (data) => {
          Swal.fire('Perfecto...', 'Actualizado', 'success');
        },
        (err) => {
          Swal.fire('Oops...', err.error.msg, 'error');
        }
      );
    }
    delete(){
      this.service.delete(this.id).subscribe(d=>{
        Swal.fire('Perfecto...', 'Eliminado', 'success');
        this.router.navigateByUrl('/accidentes');
        
      },err=>{
      
        Swal.fire('Oops...', err.error.msg[0].msg, 'error');
      });
    }
}
