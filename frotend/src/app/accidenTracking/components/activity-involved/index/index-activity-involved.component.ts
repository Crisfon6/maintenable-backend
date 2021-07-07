import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ActivityInvolvedService } from '../../../services/activity-involved.service';

@Component({
    selector: 'app-index-activity-involved',
    templateUrl: './index-activity-involved.component.html',
    styleUrls: ['./index-activity-involved.component.css']
})
export class  IndexActivityInvolvedComponent implements OnInit {
    isLoading = true; 
    data: any;
    filter ='';
    @ViewChild(MatPaginator) paginator: MatPaginator | any ='';
    pageSize = 30;
    constructor(private activityInvolvedService: ActivityInvolvedService,private _router:Router) {
      this.activityInvolvedService.get().subscribe((data) => {
        this.data = data.items;
        this.totalPages = Math.floor(data.total / this.pageSize);
        this.isLoading = false;
      });
      
    }
    totalPages = 0;
    title = 'Actividad Envuelta';
    ngOnInit(): void {}
    displayedColumns: string[] = ['Actividad Envuelta'];
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.activityInvolvedService.get(this.filter).subscribe((data) => {
        
        this.data = data.items;
      });
    }
    ngAfterViewInit() {
      this.paginator.page.subscribe((data:any) => {
  
        this.activityInvolvedService.get(this.filter,(data.pageIndex*this.pageSize),((data.pageIndex+1)*this.pageSize));
        
      });
    }
    clickRow(row:any){
    const url = `/accidentes/actividadaInvolucrada/editar/${row._id}`;
    this._router.navigateByUrl(url);
    }
}
