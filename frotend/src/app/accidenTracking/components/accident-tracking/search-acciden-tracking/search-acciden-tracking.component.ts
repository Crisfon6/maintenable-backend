
import { CollectionViewer, DataSource, SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { AccidentTrackingService } from 'src/app/accidenTracking/services/accident-tracking.service';
import { UserService } from 'src/app/accidenTracking/services/user.service';

@Component({
  selector: 'app-search-acciden-tracking',
  templateUrl: './search-acciden-tracking.component.html',
  styleUrls: ['./search-acciden-tracking.component.css']
})
export class SearchAccidenTrackingComponent  {

   isLoading = true;
   data: any;
   filter ='';
   @ViewChild(MatPaginator) paginator: MatPaginator| any = '';
   pageSize = 30;
   edit:Boolean;
  //checkbox
  selection = new SelectionModel<any>(true, []);

   constructor(private accidentService: AccidentTrackingService,private _router:Router) {
    this.edit=true;
     this.accidentService.get('',).subscribe((data) => {
       
       this.data = data;
       this.totalPages = Math.floor(data.total / this.pageSize);
       this.isLoading = false;
     });
  
   }
   totalPages = 0;
   title = 'Seguimiento de Accidentes';
   ngOnInit(): void {}
   displayedColumns: string[] =  ["Seleccionar",'Fecha de registro',"Compañia involucrada","Contratista","Area","Tipo de lesion"];;
 
   applyFilter(event: Event) {
     this.accidentService.get(this.filter).subscribe((data:any) => {
       
       this.data = data.items;
     });
   }
   ngAfterViewInit() {
     this.paginator.page.subscribe((data:any) => {
 
       this.accidentService.get(this.filter,(data.pageIndex*this.pageSize),((data.pageIndex+1)*this.pageSize));
       
     });
   }
   clickRow(row:any){
   const url = `accidentes/seguimientoAccidentes/editar/${row._id}`;
      this._router.navigateByUrl(url);
   }




   /** Whether the number of selected elements matches the total number of rows. */
   isAllSelected() {
     const numSelected = this.selection.selected.length;
     const numRows = this.data.length;
     return numSelected === numRows;
   }
 
   /** Selects all rows if they are not all selected; otherwise clear selection. */
   masterToggle() {
     if (this.isAllSelected()) {
       this.selection.clear();
       return;
     }
 
     this.selection.select(...this.data);
   }
 download(){
   let ids:string[] = [];
   this.selection.selected.forEach(d=>{
     ids.push(d._id);
   });
   this.accidentService.getCSV(ids).subscribe(
      (data:any) => {
        this.downloadFile(data);
      },
      (err) => {
      }
    );
 }
 downloadFile(data: any) {
    const blob = new Blob([data], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    window.open(url);
  }
   /** The label for the checkbox on the passed row */
   checkboxLabel(row?: any): string {
     if (!row) {
       return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
     }
     return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
   }


}
