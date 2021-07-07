import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexModule } from './index/index.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { Page404Component } from './page404/page404.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './accidenTracking/interceptors/token.interceptor';
import { AccidenTrackingModule } from './accidenTracking/acciden-tracking.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    RouterModule,

    HttpClientModule,
    AccidenTrackingModule,
    AuthModule, 
    IndexModule,
    SharedModule,
    AppRoutingModule, 

  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
