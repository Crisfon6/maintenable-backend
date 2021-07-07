import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { TypeActionPlanService } from 'src/app/accidenTracking/services/type-action-plan.service';

@Component({
    selector: 'index-action-plan',
    templateUrl: './index-action-plan.component.html',
    styleUrls: ['./index-action-plan.component.css']
})
export class IndexActionPlanComponent implements OnInit {
    isLoading = true;
    data: any;
    filter ='';
    @ViewChild(MatPaginator) paginator: MatPaginator|any = '';
    pageSize = 30;
    constructor(private actionPlanService: TypeActionPlanService,private _router:Router) {
      this.actionPlanService.get().subscribe((data) => {
        this.data = data.items;
        this.totalPages = Math.floor(data.total / this.pageSize);
        this.isLoading = false;
      });
      
    }
    totalPages = 0;
    title = 'Plan de accion';
    ngOnInit(): void {}
    displayedColumns: string[] = ['Plan de accion'];
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.actionPlanService.get(this.filter).subscribe((data:any) => {
        
        this.data = data.items;
      });
    }
    ngAfterViewInit() {
      this.paginator.page.subscribe((data:any) => {
  
        this.actionPlanService.get(this.filter,(data.pageIndex*this.pageSize),((data.pageIndex+1)*this.pageSize));
        
      });
    }
    clickRow(row:any){
    const url = `accidentes/planesAccion/editar/${row._id}`;
    this._router.navigateByUrl(url);
    }
}
