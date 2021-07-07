import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ActivityInvolvedService } from '../../../services/activity-involved.service';
import { AreaService } from '../../../services/area.service';
import { CompanyInvolvedService } from '../../../services/company-involved.service';
import { ContractorService } from '../../../services/contractor.service';

@Component({
    selector: 'app-index-activity-involved',
    templateUrl: './index-contractor.component.html',
    styleUrls: ['./index-contractor.component.css']
})
export class  IndexContractorComponent implements OnInit {
    isLoading = true; 
    data: any;
    filter ='';
    @ViewChild(MatPaginator) paginator: MatPaginator| any = '';
    pageSize = 30;
    constructor(private contractorService: ContractorService,private _router:Router) {
      this.contractorService.get().subscribe((data) => {
        this.data = data.items;
        this.totalPages = Math.floor(data.total / this.pageSize);
        this.isLoading = false;
      });
      
    }
    totalPages = 0;
    title = 'Contratistas';
    ngOnInit(): void {}
    displayedColumns: string[] = ['Contratista'];
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.contractorService.get(this.filter).subscribe((data) => {
        
        this.data = data.items;
      });
    }
    ngAfterViewInit() {
      this.paginator.page.subscribe((data:any) => {
  
        this.contractorService.get(this.filter,(data.pageIndex*this.pageSize),((data.pageIndex+1)*this.pageSize));
        
      });
    }
    clickRow(row:any){
    const url = `accidentes/contratista/editar/${row._id}`;
    this._router.navigateByUrl(url);
    }
}
