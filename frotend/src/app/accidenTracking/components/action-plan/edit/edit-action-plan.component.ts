import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { InjuredTypeService } from '../../../services/injured-type.service';
import { ActionPlanService } from '../../../services/action-plan.service';
import { TypeActionPlanService } from '../../../services/type-action-plan.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-action-plan',
    templateUrl: '../../shared/ceratewithname/createwithname.component.html',
})
export class EditActionPlanComponent implements OnInit {
  allowDelete=true;
  form = this.fb.group({
    name: ['', Validators.required],
  });
  title = 'Editar plan de accion';
  contractors = [];
  id:string;
  constructor(
    private actionPlanService: TypeActionPlanService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router:Router
  ) {
     this.id = this.route.snapshot.params.id;
    this.actionPlanService.getById(this.id).subscribe((data) => {
      this.form.setValue({
        name:data.result.name

      })
    });
  }
  onSubmit() {
    const data = this.form.value;
    this.actionPlanService.update(this.id,data).subscribe(
      (data:any) => {
        Swal.fire('Perfecto...', 'Actualizado', 'success');
      },
      (err:any) => {
        Swal.fire('Oops...', err.error.msg, 'error');
      }
    );
  }
  delete(){
    this.actionPlanService.delete(this.id).subscribe(d=>{
      Swal.fire('Perfecto...', 'Eliminado', 'success');
      this.router.navigateByUrl('/accidentes');
      
    },err=>{
    
      Swal.fire('Oops...', err.error.msg[0].msg, 'error');
    });
  }
  ngOnInit(): void {}

}
