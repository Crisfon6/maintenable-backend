import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivityInvolvedService } from 'src/app/accidenTracking/services/activity-involved.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-activity-involved.component',
  templateUrl: '../../shared/ceratewithname/createwithname.component.html',
})
export class CreateActivityInvolvedComponent implements OnInit {
  allowDelete = false;

  form = this.fb.group({
    name: ['', Validators.required],
  });
  title = 'Crear actividad involucrada';
  contractors = [];
  constructor(
    private activityInvolvedService: ActivityInvolvedService,
    private fb: FormBuilder
  ) {
    this.activityInvolvedService.get().subscribe((data) => {
      this.contractors = data.items;
    });
  }
  onSubmit() {
    const data = this.form.value;
    this.activityInvolvedService.create(data).subscribe(
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
