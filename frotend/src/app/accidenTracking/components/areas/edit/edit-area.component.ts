import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AreaService } from '../../../services/area.service';

@Component({
    templateUrl: '../../shared/ceratewithname/createwithname.component.html',
   
})
export class EditAreaComponent  {
    

    allowDelete=true;
    form = this.fb.group({
      name: ['', Validators.required],
    });
    title = 'Editar area';
    contractors = [];
    id:string;
    constructor(
      private areaService: AreaService,
      private fb: FormBuilder,
      private route: ActivatedRoute,
      private router:Router
    ) {
       this.id = this.route.snapshot.params.id;
      this.areaService.getById(this.id).subscribe((data) => {
        this.form.setValue({
          name:data.items.name
  
        })
      });
    }
    onSubmit() {
      const data = this.form.value;
      this.areaService.update(this.id,data).subscribe(
        (data) => {
          Swal.fire('Perfecto...', 'Actualizado', 'success');
        },
        (err) => {
          Swal.fire('Oops...', err.error.msg, 'error');
        }
      );
    }
    delete(){
      this.areaService.delete(this.id).subscribe(d=>{
        Swal.fire('Perfecto...', 'Eliminado', 'success');
        this.router.navigateByUrl('/accidentes');
        
      },err=>{
      
        Swal.fire('Oops...', err.error.msg[0].msg, 'error');
      });
    }
}
