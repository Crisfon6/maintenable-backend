import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UploadService {
    baseUrl: String;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl + '/uploads';
  }
  uploadImage(img: any): Observable<any> {
    const fd = new FormData();
    fd.append('file', img);
    return this.http.post(this.baseUrl + '/img', fd);
  }
  uploadPdf(pdf: any): Observable<any> {
    const fd = new FormData();
    fd.append('file', pdf);
    return this.http.post(this.baseUrl + '/pdf', fd);
  }

  updateImage(imgOld: String, img: any): Observable<any> {
    const fd = new FormData();
    fd.append('file', img);
    return this.http.put(this.baseUrl + '/update/img/' + imgOld, fd);
  }
  updatePdf(pdfOld: String, pdf: any): Observable<any> {
    const fd = new FormData();
    fd.append('file', pdf);
    return this.http.put(this.baseUrl + '/update/pdf/' + pdfOld, fd);
  }
}