import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccidenTrackingModule } from './accidenTracking/acciden-tracking.module';

import { Page404Component } from './page404/page404.component';

import { IndexRoutingModule } from './index/index-routing.module';
import { AccidenTrackingRoutingModule } from './accidenTracking/acciden-tracking-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';

const ROUTES: Routes = [
  // {path:'inicio',component:IndexComponent},
  { path: '', redirectTo: 'accidentes', pathMatch: 'full' },
  { path: '**', component: Page404Component },
];

@NgModule({
  declarations: [],
  imports: [  AuthRoutingModule,IndexRoutingModule,AccidenTrackingRoutingModule,RouterModule.forRoot(ROUTES),]
  // exports: [RouterModule],
})
export class AppRoutingModule {}
