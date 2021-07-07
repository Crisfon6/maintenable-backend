import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccidenTrackingRoutingModule } from './acciden-tracking-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AccidentComponent } from './accident.component';
import { AccidentTrackingComponent } from './components/accident-tracking/accident-tracking.component';
import { CreateAccidentTrackingComponent } from './components/accident-tracking/create-accident-tracking/create-accident-tracking.component';

import { CreateActionPlanComponent } from './components/action-plan/create/create-action-plan.component';
import { ActivityInvolvedComponent } from './components/activity-involved/activity-involved.component';
import { AreasComponent } from './components/areas/areas.component';
import { BodyPartsComponent } from './components/body-parts/body-parts.component';
import { ClassificationsComponent } from './components/classifications/classifications.component';
import { CompanyInvolvedComponent } from './components/company-involved/company-involved.component';
import { ContractorComponent } from './components/contractor/contractor.component';
import { TypeInjuryComponent } from './components/type-injury/type-injury.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditAccidentTrackingComponent } from './components/accident-tracking/edit-accident-tracking/edit-accident-tracking.component';
import { SearchAccidenTrackingComponent } from './components/accident-tracking/search-acciden-tracking/search-acciden-tracking.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { RouterModule } from '@angular/router';
import { UserComponent } from './components/users/user.component';
import {  CreateUserComponent } from './components/users/create/create.component';
import { IndexUserComponent } from './components/users/index-user/index-user.component';
import { EditUserComponent } from './components/users/edit/edit.component';
import { ActionPlanComponent } from './components/action-plan/actionplan.component';
import { IndexActionPlanComponent } from './components/action-plan/index/index-action-plan.component';
import { CreateActivityInvolvedComponent } from './components/activity-involved/create/create-activity-involved.component';
import { EditActivityInvolvedComponent } from './components/activity-involved/edit/edit-activity-involved.component';
import { IndexActivityInvolvedComponent } from './components/activity-involved/index/index-activity-involved.component';
import { IndexAreaComponent } from './components/areas/index/index-area.component';
import { EditAreaComponent } from './components/areas/edit/edit-area.component';
import { CreateAreaComponent } from './components/areas/create/create-area.component';
import { IndexBodyPartComponent } from './components/body-parts/index/index-body-parts.component';
import { EditBodyPartComponent } from './components/body-parts/edit/edit-body-parts.component';
import { CreateClassificationComponent } from './components/classifications/create/create-classifications.component';
import { IndexClassificationsComponent } from './components/classifications/index/index-classifications.component';
import { EditClassificationComponent } from './components/classifications/edit/edit-classifications.component';
import { CreateCompanyInvolvedComponent } from './components/company-involved/create/create-company-involved.component';
import { IndexCompanyInvolvedComponent } from './components/company-involved/index/index-company-involved.component';
import { EditCompanyInvolvedComponent } from './components/company-involved/edit/edit-company-involved.component';
import { CreateContractorComponent } from './components/contractor/create/create-contractor.component';
import { EditContractorComponent } from './components/contractor/edit/edit-contractor.component';
import { IndexContractorComponent } from './components/contractor/index/index-contractor.component';
import { CreateBodyPartComponent } from './components/body-parts/create/create-body-parts.component';
import { EditActionPlanComponent } from './components/action-plan/edit/edit-action-plan.component';
import { CreateTypeInjuryComponent } from './components/type-injury/create/create-type-injury.component';
import { EditTypeInjuryComponent } from './components/type-injury/edit/edit-type-injury.component';
import { IndexTypeInjuryComponent } from './components/type-injury/index/index-type-injury.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import { EditEvidenceReportComponent } from './components/evidenceReport/editEvidenceReport/edit-evidenceReport.component';
import { CreateEvidenceReportComponent } from './components/evidenceReport/createEvidenceReport/create-evidenceReport.component';
import { SearchEvidenceReportComponent } from './components/evidenceReport/searchEvidenceReport/search-evidenceReport.component';
import { EvidenceReportComponent } from './components/evidenceReport/evidenceReport.component';
import { CityComponent } from './components/city/city.component';
import { SearchCityComponent } from './components/city/search/search-city.component';
import { CreateCityComponent } from './components/city/create/create-city.component';
import { EditCityComponent } from './components/city/edit/edit-city.component';
import { CreatePotentialComponent } from './components/potential/create/create-potential.component';
import { EditPotentialComponent } from './components/potential/edit/edit-potential.component';
import { SearchPotentialComponent } from './components/potential/search/search-potential.component';
import { PotentialComponent } from './components/potential/potential.component';
import { SupervisorComponent } from './components/supervisor/index-supervisor.component';
import { CreateSupervisorComponent } from './components/supervisor/create/create-supervisor.component';
import { EditSupervisorComponent } from './components/supervisor/edit/edit-supervisor.component';
import { SearchSupervisorComponent } from './components/supervisor/search/search.supervisor.component';
@NgModule({
  declarations: [
    AccidentComponent,
    AccidentTrackingComponent,
    CreateAccidentTrackingComponent,
    ActivityInvolvedComponent,
    AreasComponent,
    BodyPartsComponent,
    ClassificationsComponent,
    CompanyInvolvedComponent,
    ContractorComponent,
    TypeInjuryComponent,
    DashboardComponent,
    EditUserComponent,
    EditAccidentTrackingComponent,
    SearchAccidenTrackingComponent,
    UserComponent,
    CreateUserComponent,
    IndexUserComponent,
    ActionPlanComponent,
    CreateActionPlanComponent,
    IndexActionPlanComponent,
    CreateActivityInvolvedComponent,
    EditActivityInvolvedComponent,
    IndexActivityInvolvedComponent,
    IndexAreaComponent,
    EditAreaComponent,
    CreateAreaComponent,
    IndexBodyPartComponent,
    EditBodyPartComponent,
    CreateClassificationComponent,
    IndexClassificationsComponent,
    EditClassificationComponent,
    CreateCompanyInvolvedComponent,
    IndexCompanyInvolvedComponent,
    EditCompanyInvolvedComponent,
    CreateContractorComponent,
    EditContractorComponent,
    IndexContractorComponent,
    CreateBodyPartComponent,
    EditActionPlanComponent,
    CreateTypeInjuryComponent,
    EditTypeInjuryComponent,
    IndexTypeInjuryComponent,
    EditEvidenceReportComponent,
    CreateEvidenceReportComponent,
    SearchEvidenceReportComponent,
    EvidenceReportComponent,
    CityComponent, SearchCityComponent,CreateCityComponent,
    EditCityComponent,
    SearchPotentialComponent,CreatePotentialComponent,EditPotentialComponent,PotentialComponent,
    SearchSupervisorComponent,CreateSupervisorComponent,EditSupervisorComponent,SupervisorComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,    
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatListModule,
    MatCheckboxModule,
    MatCardModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AccidentComponent],
})
export class AccidenTrackingModule {}
