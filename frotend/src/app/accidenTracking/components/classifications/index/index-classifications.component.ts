import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ActivityInvolvedService } from '../../../services/activity-involved.service';
import { AreaService } from '../../../services/area.service';
import { ClassificationService } from 'src/app/accidenTracking/services/classification.service';

@Component({
    selector: 'app-index-activity-involved',
    templateUrl: './index-classifications.component.html',
    styleUrls: ['./index-classifications.component.css']
})
export class  IndexClassificationsComponent implements OnInit {
    isLoading = true; 
    data: any;
    filter ='';
    @ViewChild(MatPaginator) paginator: MatPaginator| any ='';
    pageSize = 30;
    constructor(private classificationService: ClassificationService,private _router:Router) {
      this.classificationService.get().subscribe((data) => {
        this.data = data.items;
        this.totalPages = Math.floor(data.total / this.pageSize);
        this.isLoading = false;
      });
      
    }
    totalPages = 0;
    title = 'Clasificaciones';
    ngOnInit(): void {}
    displayedColumns: string[] = ['Clasificaciones'];
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.classificationService.get(this.filter).subscribe((data) => {
        
        this.data = data.items;
      });
    }
    ngAfterViewInit() {
      this.paginator.page.subscribe((data:any) => {
  
        this.classificationService.get(this.filter,(data.pageIndex*this.pageSize),((data.pageIndex+1)*this.pageSize));
        
      });
    }
    clickRow(row:any){
    const url = `accidentes/clasificaciones/editar/${row._id}`;
    this._router.navigateByUrl(url);
    }
}
