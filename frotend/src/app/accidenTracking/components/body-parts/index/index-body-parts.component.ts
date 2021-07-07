import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ActivityInvolvedService } from '../../../services/activity-involved.service';
import { AreaService } from '../../../services/area.service';
import { InjuredBodyPartService } from '../../../services/injured-body-part.service';

@Component({
    selector: 'app-index-body-parts',
    templateUrl: './index-body-parts.component.html',
    styleUrls: ['./index-body-parts.component.css']
})
export class  IndexBodyPartComponent implements OnInit {
    isLoading = true; 
    data: any;
    filter ='';
    @ViewChild(MatPaginator) paginator: MatPaginator|any = '';
    pageSize = 30;
    constructor(private service: InjuredBodyPartService,private _router:Router) {
      this.service.get().subscribe((data) => {
        this.data = data.items;
        
        this.totalPages = Math.floor(data.total / this.pageSize);
        this.isLoading = false;
      });
      
    }
    totalPages = 0;
    title = 'Partes del cuerpo';
    ngOnInit(): void {}
    displayedColumns: string[] = ['Areas'];
  
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
    const url = `accidentes/partesCuerpo/editar/${row._id}`;
    this._router.navigateByUrl(url);
    }
}
