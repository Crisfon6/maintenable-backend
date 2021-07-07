import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { UserService } from 'src/app/accidenTracking/services/user.service';
@Component({
  selector: 'app-index-user',
  templateUrl: './index-user.component.html',
  styleUrls: ['./index-user.component.css']
})
export class IndexUserComponent implements OnInit, AfterViewInit {

  isLoading = true;
  data: any;
  filter ='';
  @ViewChild(MatPaginator) paginator: MatPaginator| any='';
  pageSize = 30;
  constructor(private userService: UserService,private _router:Router) {
    this.userService.get().subscribe((data) => {
      this.data = data.items;
      this.totalPages = Math.floor(data.total / this.pageSize);
      this.isLoading = false;
    });
    
  }
  totalPages = 0;
  title = 'Usuarios';
  ngOnInit(): void {}
  displayedColumns: string[] = ['usuario'];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.userService.get(this.filter).subscribe((data) => {
      
      this.data = data.items;
    });
  }
  ngAfterViewInit() {
    this.paginator.page.subscribe((data:any) => {

      this.userService.get(this.filter,(data.pageIndex*this.pageSize),((data.pageIndex+1)*this.pageSize));
      
    });
  }
  clickRow(row:any){
  const url = `accidentes/usuarios/editar/${row._id}`;
  this._router.navigateByUrl(url);
  }
}
