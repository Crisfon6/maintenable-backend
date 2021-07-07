import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ActivityInvolvedService } from '../../../services/activity-involved.service';
import { AreaService } from '../../../services/area.service';
import { CompanyInvolvedService } from '../../../services/company-involved.service';

@Component({
    selector: 'app-index-activity-involved',
    templateUrl: './index-company-involved.component.html',
    styleUrls: ['./index-company-involved.component.css']
})
export class  IndexCompanyInvolvedComponent implements OnInit {
    isLoading = true; 
    data: any;
    filter ='';
    @ViewChild(MatPaginator) paginator: MatPaginator | any = '';
    pageSize = 30;
    constructor(private companyInvolvedService: CompanyInvolvedService,private _router:Router) {
      this.companyInvolvedService.get().subscribe((data) => {
        this.data = data.items;
        this.totalPages = Math.floor(data.total / this.pageSize);
        this.isLoading = false;
      });
      
    }
    totalPages = 0;
    title = 'Empresa involucrada';
    ngOnInit(): void {}
    displayedColumns: string[] = ['Empresa Involucrada'];
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.companyInvolvedService.get(this.filter).subscribe((data) => {
        
        this.data = data.items;
      });
    }
    ngAfterViewInit() {
      this.paginator.page.subscribe((data:any) => {
  
        this.companyInvolvedService.get(this.filter,(data.pageIndex*this.pageSize),((data.pageIndex+1)*this.pageSize));
        
      });
    }
    clickRow(row:any){
    const url = `accidentes/empresaInvolucrada/editar/${row._id}`;
    this._router.navigateByUrl(url);
    }
}
