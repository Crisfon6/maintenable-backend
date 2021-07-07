import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { InjuredTypeService } from '../../../services/injured-type.service';
import { ActionPlanService } from '../../../services/action-plan.service';
import { TypeActionPlanService } from '../../../services/type-action-plan.service';
@Component({
  selector: 'app-action-plan',
    templateUrl: '../../shared/ceratewithname/createwithname.component.html',
})
export class CreateActionPlanComponent implements OnInit {

  form = this.fb.group({
    name: ['', Validators.required],
  });
  allowDelete= false;
  title = 'Crear plan de accion';
  contractors = [];
  constructor(
    private actionPlanService: TypeActionPlanService,
    private fb: FormBuilder
  ) {
    this.actionPlanService.get().subscribe((data) => {
      this.contractors = data.items;
    });
  }
  onSubmit() {
    const data = this.form.value;
    this.actionPlanService.create(data).subscribe(
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
