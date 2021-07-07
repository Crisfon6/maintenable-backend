import { CompanyInvolvedService } from '../../services/company-involved.service';

import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-company-involved',
  templateUrl: './company-involved.component.html',
})
export class CompanyInvolvedComponent implements OnInit {

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

}
