import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IndexComponent } from './index/index.component';
import { RouterModule } from '@angular/router';
import { IndexRoutingModule } from './index-routing.module';



@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
  IndexComponent
  ]
})
export class IndexModule { }
