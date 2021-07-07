import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ActivityInvolvedService } from '../../../services/activity-involved.service';
import { AreaService } from '../../../services/area.service';

@Component({
    selector: 'app-index-area',
    templateUrl: './index-area.component.html',
    styleUrls: ['./index-area.component.css']
})
export class  IndexAreaComponent implements OnInit {
    isLoading = true; 
    data: any;
    filter ='';
    @ViewChild(MatPaginator) paginator: MatPaginator| any= '';
    pageSize = 30;
    constructor(private areaService: AreaService,private _router:Router) {
      this.areaService.get().subscribe((data) => {
        this.data = data.items;
        this.totalPages = Math.floor(data.total / this.pageSize);
        this.isLoading = false;
      });
      
    }
    totalPages = 0;
    title = 'Areas';
    ngOnInit(): void {}
    displayedColumns: string[] = ['Areas'];
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.areaService.get(this.filter).subscribe((data) => {
        
        this.data = data.items;
      });
    }
    ngAfterViewInit() {
      this.paginator.page.subscribe((data:any) => {
  
        this.areaService.get(this.filter,(data.pageIndex*this.pageSize),((data.pageIndex+1)*this.pageSize));
        
      });
    }
    clickRow(row:any){
    const url = `accidentes/area/editar/${row._id}`;
    this._router.navigateByUrl(url);
    }
}
