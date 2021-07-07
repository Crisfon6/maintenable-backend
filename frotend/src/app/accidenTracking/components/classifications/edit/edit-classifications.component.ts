import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ActivityInvolved } from '../../../../../../../backend/src/models/activityInvolved.model';
import { ActivityInvolvedService } from '../../../services/activity-involved.service';
import { AreaService } from '../../../services/area.service';
import { InjuredBodyPartService } from '../../../services/injured-body-part.service';
import { ClassificationService } from '../../../services/classification.service';

@Component({
    templateUrl: '../../shared/ceratewithname/createwithname.component.html',
   
})
export class EditClassificationComponent  {
    

    allowDelete=true;
    form = this.fb.group({
      name: ['', Validators.required],
    });
    title = 'Editar plan de accion';
    contractors = [];
    id:string;
    constructor(
      private classificationService: ClassificationService,
      private fb: FormBuilder,
      private route: ActivatedRoute,
      private router:Router
    ) {
       this.id = this.route.snapshot.params.id;
      this.classificationService.getById(this.id).subscribe((data) => {
        this.form.setValue({
          name:data.items.name
  
        })
      });
    }
    onSubmit() {
      const data = this.form.value;
      this.classificationService.update(this.id,data).subscribe(
        (data) => {
          Swal.fire('Perfecto...', 'Actualizado', 'success');
        },
        (err) => {
          Swal.fire('Oops...', err.error.msg, 'error');
        }
      );
    }
    delete(){
      this.classificationService.delete(this.id).subscribe(d=>{
        Swal.fire('Perfecto...', 'Eliminado', 'success');
        this.router.navigateByUrl('/accidentes');
        
      },err=>{
      
        Swal.fire('Oops...', err.error.msg[0].msg, 'error');
      });
    }
}
