import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivityInvolvedService } from 'src/app/accidenTracking/services/activity-involved.service';
import { AreaService } from 'src/app/accidenTracking/services/area.service';
import Swal from 'sweetalert2';
import { InjuredBodyPartService } from '../../../services/injured-body-part.service';
import { CompanyInvolvedService } from '../../../services/company-involved.service';
import { ContractorService } from '../../../services/contractor.service';
import { InjuredTypeService } from 'src/app/accidenTracking/services/injured-type.service';

@Component({
  templateUrl: '../../shared/ceratewithname/createwithname.component.html',
})
export class CreateTypeInjuryComponent implements OnInit {
  allowDelete = false;
  form =  this.fb.group({
    name: ['',Validators.required]
      });
      title= 'Crear tipo de lesion';
      contractors =[];
      constructor(private service:InjuredTypeService,private fb : FormBuilder) { 
    this.service.get().subscribe(data=>{
      this.contractors =data.items;
    })
      }
    onSubmit(){
      const data = this.form.value;
      this.service.create(data).subscribe(data=>{
     Swal.fire('Perfecto...', 'Registrado', 'success');
      },err=>{
        Swal.fire('Oops...', err.error.msg, 'error');
      })
    }
      ngOnInit(): void {
      }
      delete(){}
}
