import { BooleanInput } from '@angular/cdk/coercion';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccidentTrackingService } from 'src/app/accidenTracking/services/accident-tracking.service';
import { UploadService } from 'src/app/accidenTracking/services/upload.service';

import Swal from 'sweetalert2';
import { ICommonProperty } from '../../../../models/propertycommon.interface';

@Component({
  selector: 'app-create-accident-tracking',
  templateUrl: './create-accident-tracking.component.html',
  styleUrls: ['./create-accident-tracking.component.css'],
})
export class CreateAccidentTrackingComponent {
  allowDelete = false;
  data: any;
  loading = true;
  user: any;
  maxActionPlan:Boolean;
  accidentTrackingForm:FormGroup;
  title:String;
  file:File;
  constructor(
    private _fb: FormBuilder,
private router:Router,
private uploadService:UploadService,
    private _accidentTrackingService: AccidentTrackingService
  ) {
    this.maxActionPlan = true;
    this.accidentTrackingForm = this._fb.group({
      date: [Date.now(), Validators.required],
      contractor: ['', Validators.required],
      companyInvolved: ['', Validators.required],
      area: ['', Validators.required],
      description: ['', Validators.required],
      activityInvolved: ['', Validators.required],
      classification: ['', Validators.required],
      injuredBodyPart: ['', Validators.required],
      injuredType: ['', Validators.required],
      actionPlanArray: this._fb.array([
        this._fb.group({
          actionPlan: ['', Validators.required],
          dateCompliance: ['', Validators.required],
          number: [''],
        }),
      ]),
    });
    this.title = 'Crear seguimiento de accidente';
    
    this._accidentTrackingService.getInfoForCreate().subscribe(
      (data: ICommonProperty[]) => {
        this.data = data;
        this.loading = false;
      },
      (err) => {
        Swal.fire('Oops...', err, 'error');
      }
    );
  }

  
 

  get actionPlanArray() {
    return this.accidentTrackingForm.get('actionPlanArray') as FormArray;
  }
  groupActionPlan(i: number) {
    return this.actionPlanArray.controls[i] as FormGroup;
  }

  addActionPlan() {
    this.actionPlanArray.push(
      this._fb.group({
        actionPlan: ['', Validators.required],
        dateCompliance: ['', Validators.required],
        number: [''],
      })
    );
    if (this.actionPlanArray.length >= 7) {
      this.maxActionPlan = true;
    }
  }
  removeActionPlan(item: number) {
    this.actionPlanArray.removeAt(item);
  }
  
  fileSeleted(event: any) {
    this.file = event.target.files[0];
  }
  OnSubmit() {
    const data = this.accidentTrackingForm.value;
    this._accidentTrackingService.create(data).subscribe(
      (d) => {
        if(this.file){
          this.uploadService.uploadPdf(this.file).subscribe((url: any) => {
            
            const complete = d;
            complete.pdf = url.msg;
            const {_id, ...dataRes} = complete;
            this._accidentTrackingService.update(_id,dataRes).subscribe(
              (p: any) => {
                Swal.close();
                Swal.fire('Perfecto...', 'Registrado', 'success');
              },
              (err) => {
                Swal.fire('Oops...', err.error.msg, 'error');
              }
            );
          },err=>{
            Swal.fire('Perfecto...', 'Registrado', 'success');
            this.router.navigateByUrl('/accidentes/seguimientoAccidentes');
          });

      }},
      (err) => {
        Swal.fire('Oops...', err.error.msg[0].msg, 'error');
      }
    );
  }
  delete() {}
  download() {}
}
