import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EvidenceReportService } from 'src/app/accidenTracking/services/evidenceReport.service';
import { UploadService } from 'src/app/accidenTracking/services/upload.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-edit-evidenceReport',
    templateUrl: '../createEvidenceReport/create-evidenceReport.component.html',
    
})
export class EditEvidenceReportComponent  {
    loading: boolean;
    title: string;
    form: FormGroup;
    dataForm: any;
    file: File;
    edit: boolean;
    idActual :string;
    dataActual: any;
    constructor(
      private fb: FormBuilder,
      private service: EvidenceReportService,
      private uploadService: UploadService,
      private route:ActivatedRoute
    ) {
      this.edit = true;
      this.idActual = this.route.snapshot.params.id;
      this.title = 'Reporte de evidencia';
      this.loading = true;
      this.service.getInfoForCreate().subscribe((data) => {
        this.dataForm = data.items;
        this.service.getById(this.idActual).subscribe(dataActual=>{
            this.dataActual = dataActual.items;
            this.initForm();
        })
      });
    }
    fileSeleted(event) {
      this.file = event.target.files[0];
    }
    initForm() {
      this.form = this.fb.group({
        supervisor: [this.dataActual.supervisor, Validators.required],
        companyObserved: [this.dataActual.companyObserved, Validators.required],
        contractor: [this.dataActual.contractor, Validators.required],
        area: [this.dataActual.area, Validators.required],
        observation: [this.dataActual.observation, Validators.required],
        potential: [this.dataActual.potential, Validators.required],
        activityInvolved: [this.dataActual.activityInvolved, Validators.required],
        city: [this.dataActual.city, Validators.required],
        closingDate: [this.dataActual.closingDate, Validators.required], 
        observations: [this.dataActual.observations,],
        status: [this.dataActual.status, Validators.required],
        imgOld: [this.dataActual.photoUnsafeCondition,]
      });
      this.loading = false;
    }
    OnSubmit() {
      this.service.update(this.idActual,this.form.value).subscribe(
        (data) => {
          if (this.file) {
            let imgOld = this.form.value.imgOld.split('/');
            imgOld = imgOld[imgOld.length-1];
            this.uploadService.updateImage(imgOld,this.file).subscribe(
              (url) => {
                const { _id, ...resData } = data.items;
                resData.photoUnsafeCondition = url.msg;
                this.service.update(_id, resData).subscribe(
                  (dataUpdated) => {
                    Swal.fire('Perfecto...', 'Registrado', 'success');
                  },
                  (err) => {
                    Swal.fire('Oops...', err.error.msg, 'error');
                  }
                );
              },
              (err) => {
                Swal.fire('Oops...', err.error.msg, 'error');
              }
            );
          } else {
            Swal.fire('Perfecto...', 'Registrado', 'success');
          }
        },
        (err) => {
          Swal.fire('Oops...', err.error.msg, 'error');
        }
      );
    }
}
