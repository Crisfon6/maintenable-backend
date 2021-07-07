import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EvidenceReportService } from 'src/app/accidenTracking/services/evidenceReport.service';
import { UploadService } from 'src/app/accidenTracking/services/upload.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-evidenceReport',
  templateUrl: './create-evidenceReport.component.html',
  styleUrls: ['./create-evidenceReport.component.css'],
})
export class CreateEvidenceReportComponent {
  loading: boolean;
  title: string;
  form: FormGroup;
  dataForm: any;
  file: File;
  edit: boolean;
  constructor(
    private fb: FormBuilder,
    private service: EvidenceReportService,
    private uploadService: UploadService
  ) {
    this.edit = false;
    this.title = 'Reporte de evidencia';
    this.loading = true;
    this.service.getInfoForCreate().subscribe((data) => {
      this.dataForm = data.items;
      this.initForm();
    });
  }
  fileSeleted(event) {
    this.file = event.target.files[0];
  }
  initForm() {
    // FormControl
    // FormGroup
    // FormArray
    // Formbuild.group
    this.form = this.fb.group({
      supervisor: ['', Validators.required],
      companyObserved: ['', Validators.required],
      contractor: ['', Validators.required],
      area: ['', Validators.required],
      observation: ['', Validators.required],
      potential: ['', Validators.required],
      activityInvolved: ['', Validators.required],
      city: ['', Validators.required],
      closingDate: ['', Validators.required],
      status: ['',Validators.required],
      observations: [''],
    });
    this.loading = false;
  }
  OnSubmit() {
    this.service.create(this.form.value).subscribe(
      (data) => {
        if (this.file) {
          this.uploadService.uploadImage(this.file).subscribe(
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
