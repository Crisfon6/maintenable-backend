import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { TypeActionPlanService } from 'src/app/accidenTracking/services/type-action-plan.service';
import { CityService } from '../../../services/city.service';

@Component({
    selector: 'search-city',
    templateUrl: './search-city.component.html',
    styleUrls: ['./search-city.component.css']
})
export class SearchCityComponent implements OnInit {
    isLoading = true;
    data: any;
    filter ='';
    @ViewChild(MatPaginator) paginator: MatPaginator|any = '';
    pageSize = 30;
    constructor(private service: CityService,private _router:Router) {
      this.service.get('').subscribe((data) => {
        this.data = data.items;
        this.totalPages = Math.floor(data.total / this.pageSize);
        this.isLoading = false;
      });
      
    }
    totalPages = 0;
    title = 'Ciudades';
    ngOnInit(): void {}
    displayedColumns: string[] = ['Ciudades'];
  
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
    const url = `accidentes/ciudad/editar/${row._id}`;
    this._router.navigateByUrl(url);
    }
}
