import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivityInvolvedService } from 'src/app/accidenTracking/services/activity-involved.service';
import { AreaService } from 'src/app/accidenTracking/services/area.service';
import Swal from 'sweetalert2';
import { InjuredBodyPartService } from '../../../services/injured-body-part.service';
import { CompanyInvolvedService } from '../../../services/company-involved.service';

@Component({
  templateUrl: '../../shared/ceratewithname/createwithname.component.html',
})
export class CreateCompanyInvolvedComponent implements OnInit {
  allowDelete = false;
  form =  this.fb.group({
    name: ['',Validators.required]
      });
      title= 'Crear empresa involucrada'
      contractors =[];
      constructor(private companyInvolvedService:CompanyInvolvedService,private fb : FormBuilder) { 
    this.companyInvolvedService.get().subscribe(data=>{
      this.contractors =data.items;
    })
      }
    onSubmit(){
      const data = this.form.value;
      this.companyInvolvedService.create(data).subscribe(data=>{
     Swal.fire('Perfecto...', 'Registrado', 'success');
      },err=>{
        Swal.fire('Oops...', err.error.msg, 'error');
      })
    }
      ngOnInit(): void {
      }
      delete(){}
}
