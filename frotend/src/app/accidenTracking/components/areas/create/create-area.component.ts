import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivityInvolvedService } from 'src/app/accidenTracking/services/activity-involved.service';
import { AreaService } from 'src/app/accidenTracking/services/area.service';
import Swal from 'sweetalert2';

@Component({
  templateUrl: '../../shared/ceratewithname/createwithname.component.html',
})
export class CreateAreaComponent implements OnInit {
  allowDelete = false;
  form =  this.fb.group({
    name: ['',Validators.required]
      });
      title= 'Crear area'
      contractors =[];
      constructor(private areaServices:AreaService,private fb : FormBuilder) { 
    this.areaServices.get().subscribe(data=>{
      this.contractors =data.items;
    })
      }
    onSubmit(){
      const data = this.form.value;
      this.areaServices.create(data).subscribe(data=>{
     Swal.fire('Perfecto...', 'Registrado', 'success');
      },err=>{
        Swal.fire('Oops...', err.error.msg, 'error');
      })
    }
      ngOnInit(): void {
      }

      delete(){}

}
