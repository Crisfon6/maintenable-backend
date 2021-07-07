import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { IndexComponent } from './index/index.component';

const routes: Routes = [{ path: 'inicio', component: IndexComponent },
{ path: '', redirectTo: 'inicio', pathMatch: 'full' },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexRoutingModule {}
