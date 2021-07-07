import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ActivityInvolvedService } from '../../../services/activity-involved.service';
import { AreaService } from '../../../services/area.service';
import { CompanyInvolvedService } from '../../../services/company-involved.service';
import { ContractorService } from '../../../services/contractor.service';
import { InjuredTypeService } from '../../../services/injured-type.service';

@Component({
    selector: 'app-index-activity-involved',
    templateUrl: './index-type-injury.component.html',
    styleUrls: ['./index-type-injury.component.css']
})
export class  IndexTypeInjuryComponent implements OnInit {
    isLoading = true; 
    data: any;
    filter ='';
    @ViewChild(MatPaginator) paginator: MatPaginator | any ='';
    pageSize = 30;
    constructor(private service: InjuredTypeService,private _router:Router) {
      this.service.get().subscribe((data) => {
        this.data = data.items;
        this.totalPages = Math.floor(data.total / this.pageSize);
        this.isLoading = false;
      });
      
    }
    totalPages = 0;
    title = 'Tipos de lesion';
    ngOnInit(): void {}
    displayedColumns: string[] = ['Contratista'];
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.service.get(this.filter).subscribe((data) => {
        
        this.data = data.items;
      });
    }
    ngAfterViewInit() {
      this.paginator.page.subscribe((data:any) => {
  
        this.service.get(this.filter,(data.pageIndex*this.pageSize),((data.pageIndex+1)*this.pageSize));
        
      });
    }
    clickRow(row:any){
    const url = `accidentes/tiposLesion/editar/${row._id}`;
    this._router.navigateByUrl(url);
    }
}
