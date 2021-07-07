import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { EvidenceReportService } from 'src/app/accidenTracking/services/evidenceReport.service';

@Component({
    selector: 'app-search-evidenceReport',
    templateUrl: './search-evidenceReport.component.html',
    styleUrls: ['./search-evidenceReport.component.css']
})
export class SearchEvidenceReportComponent implements OnInit {
    isLoading = true;
    data: any;
    filter ='';
    @ViewChild(MatPaginator) paginator: MatPaginator|any = '';
    pageSize = 30;
    constructor(private service: EvidenceReportService, private _router:Router) {
      this.service.get('').subscribe((data) => {
        this.data = data.items;
        this.totalPages = Math.floor(data.total / this.pageSize);
        this.isLoading = false;
      });
      
    }
    totalPages = 0;
    title = 'Reporte de evidencias';
    ngOnInit(): void {}
    displayedColumns: string[] = ['Actividad involucrada','Area','Ciudad','Fecha de cierre','Empresa observada','Contratista','Potencial','Supervisor',];
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.service.get(this.filter).subscribe((data:any) => {
        
        this.data = data.items;
      });
    }
    ngAfterViewInit() {
      this.paginator.page.subscribe((data:any) => {
  
        this.service.get(this.filter,(data.pageIndex*this.pageSize),((data.pageIndex+1)*this.pageSize));
        
      });
    }
    clickRow(row:any){
    const url = `accidentes/reporteEvidencia/editar/${row._id}`;
    this._router.navigateByUrl(url);
    }
}