import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccidentTrackingService } from 'src/app/accidenTracking/services/accident-tracking.service';
import { ICommonProperty } from 'src/app/models/propertycommon.interface';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionPlanService } from 'src/app/accidenTracking/services/action-plan.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-edit-accident-tracking',
  templateUrl:
    '../create-accident-tracking/create-accident-tracking.component.html',
})
export class EditAccidentTrackingComponent  {
  allowDelete = true;
  data: any;
  loading = true;
  user: any;
  maxActionPlan:Boolean;
  accidentTrackingForm:FormGroup;
  title:String;
  id:string;
  edit=true;
  constructor(
    private _fb: FormBuilder,
  private _route:ActivatedRoute,
private _actionPlanService:ActionPlanService,
    private _accidentTrackingService: AccidentTrackingService,private authService:AuthService,
    private router:Router
  ) {this.accidentTrackingForm = this._fb.group({
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
      
    ]),
  });
    
    this.id = this._route.snapshot.params.id; 
    this.maxActionPlan = true;
    this._accidentTrackingService.getInfoForCreate().subscribe(
      (dataForCreateForm: any) => {        
        this.data = dataForCreateForm;        
        this._accidentTrackingService.getById(this.id).subscribe((dataAcc:any)=>{
          this.user = dataAcc.items;
          this._actionPlanService.getByAccident(this.id).subscribe((dataAct:any)=>{
            
            this.user.actionPlanArray = dataAct.items;
            this.setValues(this.user);
          }); 
        });
      },
      (err) => {
        Swal.fire('Oops...', err, 'error');
      }
    );
    
    this.title = 'Editar seguimiento de accidente'; 
    
  }
 
  setValues(data:any){
    
  
    
    this.accidentTrackingForm.patchValue({
      date: this.user.date,
      contractor: this.user.contractor._id,
      companyInvolved: this.user.companyInvolved._id,
      area: this.user.area._id,
      description: this.user.description,
      activityInvolved: this.user.activityInvolved._id,
      classification: this.user.classification._id,
      injuredBodyPart: this.user.injuredBodyPart._id,
      injuredType: this.user.injuredType._id,
    
    });
    this.user.actionPlanArray.forEach((actionPlan:any)=>{
      this.addActionPlanWithData(actionPlan);  
    });
    this.loading =false;
  }
  addActionPlanWithData(data:any) {
    this.actionPlanArray.push(
      this._fb.group({
        id: data._id,
        actionPlan: [data.actionPlan, Validators.required],
        dateCompliance: [data.dateCompliance, Validators.required],
        number: [data.number],
      })
    );
    if (this.actionPlanArray.length >= 7) {
      this.maxActionPlan = true;
    }
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
  startDate = new Date(1990, 0, 1);

  OnSubmit() {
    const {actionPlanArray,...data} = this.accidentTrackingForm.value;

    actionPlanArray.forEach((el:any,index:number)=>{
      el.number =index;
    })
    this._accidentTrackingService.update(this.user._id,data).subscribe(
      (d) => {
      this._actionPlanService.updateArray(this.user._id,actionPlanArray).subscribe((resp:any)=>{
        Swal.fire('Perfecto...', 'Registrado', 'success');
        this.router.navigateByUrl('/accidentes/seguimientoAccidentes');

      },(err:any)=>{
        Swal.fire('Oops...', err.error.msg[0].msg, 'error');

      })

      },
      (err) => {
        Swal.fire('Oops...', err.error.msg[0].msg, 'error');
      }
    );
  }
  delete() {
  let isAdmin:any;
  this.authService.isAdmin().subscribe(d=>{
    isAdmin = d;
  });
if(isAdmin){
  this._accidentTrackingService.delete(this.id).subscribe((data:any) => {
    Swal.fire('Perfecto...', 'Eliminado', 'success');
  },
  (err:any) => {
    Swal.fire('Oops...', err.error.msg, 'error');
  });
}

  }
  download() {}
  
}
