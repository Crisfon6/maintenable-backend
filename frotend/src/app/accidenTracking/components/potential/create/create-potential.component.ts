import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { InjuredTypeService } from '../../../services/injured-type.service';
import { ActionPlanService } from '../../../services/action-plan.service';
import { TypeActionPlanService } from '../../../services/type-action-plan.service';
import { PotentialService } from 'src/app/accidenTracking/services/potential.service';
@Component({
  selector: 'app-action-plan',
    templateUrl: '../../shared/ceratewithname/createwithname.component.html',
})
export class CreatePotentialComponent implements OnInit {
  form: FormGroup;
  allowDelete= false;
  title = 'Crear potencial';
  contractors = [];
  constructor(
    private service: PotentialService,
    private fb: FormBuilder
  ) {
   this. form = this.fb.group({
      name: ['', Validators.required],
    });
  }
  onSubmit() {
    const data = this.form.value;
    this.service.create(data).subscribe(
      (data) => {
        Swal.fire('Perfecto...', 'Registrado', 'success');
      },
      (err) => {
        Swal.fire('Oops...', err.error.msg, 'error');
      }
    );
  }
  ngOnInit(): void {}
  delete(){}

}
