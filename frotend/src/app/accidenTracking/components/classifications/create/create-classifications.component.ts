import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivityInvolvedService } from 'src/app/accidenTracking/services/activity-involved.service';
import { AreaService } from 'src/app/accidenTracking/services/area.service';
import Swal from 'sweetalert2';
import { InjuredBodyPartService } from '../../../services/injured-body-part.service';
import { ClassificationService } from '../../../services/classification.service';

@Component({
  templateUrl: '../../shared/ceratewithname/createwithname.component.html',
})
export class CreateClassificationComponent implements OnInit {
  allowDelete = false;
  form =  this.fb.group({
    name: ['',Validators.required]
      });
      title= 'Crear clasificacion';
      contractors =[];
      constructor(private classificationServices: ClassificationService,private fb : FormBuilder) { 
    this.classificationServices.get().subscribe(data=>{
      this.contractors =data.items;
    })
      }
    onSubmit(){
      const data = this.form.value;
      this.classificationServices.create(data).subscribe(data=>{
     Swal.fire('Perfecto...', 'Registrado', 'success');
      },err=>{
        Swal.fire('Oops...', err.error.msg, 'error');
      })
    }
      ngOnInit(): void {
      }
      delete(){}

}
