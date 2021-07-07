import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ClassificationService } from '../../services/classification.service';
import { InjuredBodyPartService } from '../../services/injured-body-part.service';
@Component({
  selector: 'app-body-parts',
  templateUrl: './body-parts.component.html',
})
export class BodyPartsComponent implements OnInit {
  form = this.fb.group({
    name: ['', Validators.required],
  });
  title = 'Crear parte del cuerpo afectada';
  contractors = [];
  constructor(
    private injuredBodyPartService: InjuredBodyPartService,
    private fb: FormBuilder
  ) {
    this.injuredBodyPartService.get().subscribe((data) => {
      this.contractors = data.items;
    });
  }
  onSubmit() {
    const data = this.form.value;
    this.injuredBodyPartService.create(data).subscribe(
      (data) => {
        Swal.fire('Perfecto...', 'Registrado', 'success');
      },
      (err) => {
        Swal.fire('Oops...', err.error.msg, 'error');
      }
    );
  }
  ngOnInit(): void {}
}
