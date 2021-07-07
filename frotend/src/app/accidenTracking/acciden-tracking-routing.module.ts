import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { AccidentComponent } from './accident.component';

import { AccidentTrackingComponent } from './components/accident-tracking/accident-tracking.component';

import { CreateActionPlanComponent } from './components/action-plan/create/create-action-plan.component';
import { ActivityInvolvedComponent } from './components/activity-involved/activity-involved.component';
import { AreasComponent } from './components/areas/areas.component';
import { BodyPartsComponent } from './components/body-parts/body-parts.component';
import { ClassificationsComponent } from './components/classifications/classifications.component';
import { CompanyInvolvedComponent } from './components/company-involved/company-involved.component';
import { ContractorComponent } from './components/contractor/contractor.component';
import { TypeInjuryComponent } from './components/type-injury/type-injury.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateAccidentTrackingComponent } from './components/accident-tracking/create-accident-tracking/create-accident-tracking.component';
import { EditAccidentTrackingComponent } from './components/accident-tracking/edit-accident-tracking/edit-accident-tracking.component';
import { SearchAccidenTrackingComponent } from './components/accident-tracking/search-acciden-tracking/search-acciden-tracking.component';
import { UserComponent } from './components/users/user.component';
import { CreateUserComponent } from './components/users/create/create.component';
import { IndexUserComponent } from './components/users/index-user/index-user.component';
import { EditUserComponent } from './components/users/edit/edit.component';
import { IndexActionPlanComponent } from './components/action-plan/index/index-action-plan.component';
import { EditActionPlanComponent } from './components/action-plan/edit/edit-action-plan.component';
import { EditActivityInvolvedComponent } from './components/activity-involved/edit/edit-activity-involved.component';
import { CreateActivityInvolvedComponent } from './components/activity-involved/create/create-activity-involved.component';
import { IndexAreaComponent } from './components/areas/index/index-area.component';
import { EditAreaComponent } from './components/areas/edit/edit-area.component';
import { CreateAreaComponent } from './components/areas/create/create-area.component';
import { IndexContractorComponent } from './components/contractor/index/index-contractor.component';
import { CreateContractorComponent } from './components/contractor/create/create-contractor.component';
import { EditContractorComponent } from './components/contractor/edit/edit-contractor.component';
import { IndexCompanyInvolvedComponent } from './components/company-involved/index/index-company-involved.component';
import { CreateCompanyInvolvedComponent } from './components/company-involved/create/create-company-involved.component';
import { EditCompanyInvolvedComponent } from './components/company-involved/edit/edit-company-involved.component';
import { IndexActivityInvolvedComponent } from './components/activity-involved/index/index-activity-involved.component';
import { IndexClassificationsComponent } from './components/classifications/index/index-classifications.component';
import { EditClassificationComponent } from './components/classifications/edit/edit-classifications.component';
import { CreateClassificationComponent } from './components/classifications/create/create-classifications.component';
import { IndexBodyPartComponent } from './components/body-parts/index/index-body-parts.component';
import { EditBodyPartComponent } from './components/body-parts/edit/edit-body-parts.component';
import { CreateBodyPartComponent } from './components/body-parts/create/create-body-parts.component';
import { IndexTypeInjuryComponent } from './components/type-injury/index/index-type-injury.component';
import { EditTypeInjuryComponent } from './components/type-injury/edit/edit-type-injury.component';
import { CreateTypeInjuryComponent } from './components/type-injury/create/create-type-injury.component';
import { IsAdminGuard } from '../guards/is-admin.guard';
import { CreateEvidenceReportComponent } from './components/evidenceReport/createEvidenceReport/create-evidenceReport.component';
import {  SearchEvidenceReportComponent } from './components/evidenceReport/searchEvidenceReport/search-evidenceReport.component';
import { EditEvidenceReportComponent } from './components/evidenceReport/editEvidenceReport/edit-evidenceReport.component';
import { EvidenceReportComponent } from './components/evidenceReport/evidenceReport.component';
import { SearchCityComponent } from './components/city/search/search-city.component';
import { CreateCityComponent } from './components/city/create/create-city.component';
import { EditCityComponent } from './components/city/edit/edit-city.component';
import { PotentialComponent } from './components/potential/potential.component';
import { SearchPotentialComponent } from './components/potential/search/search-potential.component';
import { CreatePotentialComponent } from './components/potential/create/create-potential.component';
import { EditPotentialComponent } from './components/potential/edit/edit-potential.component';
import { SupervisorComponent } from './components/supervisor/index-supervisor.component';
import { SearchSupervisorComponent } from './components/supervisor/search/search.supervisor.component';
import { CreateSupervisorComponent } from './components/supervisor/create/create-supervisor.component';
import { EditSupervisorComponent } from './components/supervisor/edit/edit-supervisor.component';

const routes: Routes = [
  {
    path: 'accidentes',
    component: AccidentComponent,
    
    children: [
      {
        path: '',
        component: DashboardComponent,
        
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        
      },
      {
        path: 'seguimientoAccidentes',
        component: AccidentTrackingComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            component: SearchAccidenTrackingComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'crear',
            component: CreateAccidentTrackingComponent,
            canActivate: [AuthGuard,IsAdminGuard],
          },
          {
            path: 'editar/:id',
            component: EditAccidentTrackingComponent,
            canActivate: [AuthGuard],
          },
        ],
      },
     
      {
        path: 'contratista',
        component: ContractorComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            component: IndexContractorComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'crear',
            component: CreateContractorComponent,
            canActivate: [AuthGuard,IsAdminGuard],
          },
          {
            path: 'editar/:id',
            component: EditContractorComponent,
            canActivate: [AuthGuard],
          },
        ],
      },

      {
        path: 'empresaInvolucrada',
        component:CompanyInvolvedComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            component: IndexCompanyInvolvedComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'crear',
            component: CreateCompanyInvolvedComponent,
            canActivate: [AuthGuard,IsAdminGuard],
          },
          {
            path: 'editar/:id',
            component: EditCompanyInvolvedComponent,
            canActivate: [AuthGuard],
          },
        ],
      },
      {
        path: 'area',
        component: AreasComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            component: IndexAreaComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'editar/:id',
            component: EditAreaComponent,
            canActivate: [AuthGuard],

          },
          {
            path: 'crear',
            component: CreateAreaComponent,
            canActivate:[AuthGuard,IsAdminGuard]
          }
        ]
      },
      {
        path: 'actividadaInvolucrada',
        component: ActivityInvolvedComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            component: IndexActivityInvolvedComponent,
            canActivate:[AuthGuard,]
          },
          {
            path: 'editar/:id',
            component: EditActivityInvolvedComponent,
            canActivate:[AuthGuard]
          },
          {
            path: 'crear',
            component: CreateActivityInvolvedComponent,
            canActivate:[AuthGuard,IsAdminGuard]
          },
        ],
      },
      {
        path: 'clasificaciones',
        component: ClassificationsComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            component: IndexClassificationsComponent,
            canActivate:[AuthGuard,]
          },
          {
            path: 'editar/:id',
            component: EditClassificationComponent,
            canActivate:[AuthGuard,]
          },
          {
            path: 'crear',
            component: CreateClassificationComponent,
            canActivate:[AuthGuard,IsAdminGuard]
          },
        ],
      },

      {
        path: 'partesCuerpo',
        component: BodyPartsComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            component: IndexBodyPartComponent,
            canActivate:[AuthGuard,]
          },
          {
            path: 'editar/:id',
            component: EditBodyPartComponent,
            canActivate:[AuthGuard,]
          },
          {
            path: 'crear',
            component: CreateBodyPartComponent,
            canActivate:[AuthGuard,IsAdminGuard]
          },
        ],
      },
      {
        path: 'tiposLesion',
        component: TypeInjuryComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            component: IndexTypeInjuryComponent,
            canActivate:[AuthGuard,]
          },
          {
            path: 'editar/:id',
            component: EditTypeInjuryComponent,
            canActivate:[AuthGuard,]
          },
          {
            path: 'crear',
            component: CreateTypeInjuryComponent,
            canActivate:[AuthGuard,IsAdminGuard]
          },
        ],
      },
      {
        path: 'planesAccion',
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            component: IndexActionPlanComponent,
            canActivate:[AuthGuard,]
          },
          {
            path: 'crear',
            component: CreateActionPlanComponent,
            canActivate:[AuthGuard,IsAdminGuard]
          },
          {
            path: 'editar/:id',
            component: EditActionPlanComponent,
            canActivate:[AuthGuard,]
          },
        ],
      },
      {
        path: 'usuarios',
        component: UserComponent,
        canActivate:[AuthGuard,IsAdminGuard],
        children: [
          {
            path: '',
            component: IndexUserComponent,
            canActivate:[AuthGuard,IsAdminGuard]
          },
          {
            path: 'crear',
            component: CreateUserComponent,
            canActivate:[AuthGuard,IsAdminGuard]
          },
          {
            path: 'editar/:id',
            component: EditUserComponent,
            canActivate:[AuthGuard,IsAdminGuard]
          },
        ],
      },
      {
        path: 'reporteEvidencia',
        component: EvidenceReportComponent,
        canActivate:[AuthGuard,],
        children: [
          {
            path: '',
            component: SearchEvidenceReportComponent,
            canActivate:[AuthGuard,]
          },
          {
            path: 'crear',
            component: CreateEvidenceReportComponent,
            canActivate:[AuthGuard,]
          },
          {
            path: 'editar/:id',
            component: EditEvidenceReportComponent,
            canActivate:[AuthGuard,]
          },
        ],
      },
      {
        path: 'ciudad',
        component: EvidenceReportComponent,
        canActivate:[AuthGuard,],
        children: [
          {
            path: '',
            component: SearchCityComponent,
            canActivate:[AuthGuard,]
          },
          {
            path: 'crear',
            component: CreateCityComponent,
            canActivate:[AuthGuard,]
          },
          {
            path: 'editar/:id',
            component: EditCityComponent,
            canActivate:[AuthGuard,]
          },
        ],
      },
      {
        path: 'potencial',
        component: PotentialComponent,
        canActivate:[AuthGuard,],
        children: [
          {
            path: '',
            component: SearchPotentialComponent,
            canActivate:[AuthGuard,]
          },
          {
            path: 'crear',
            component: CreatePotentialComponent,
            canActivate:[AuthGuard,]
          },
          {
            path: 'editar/:id',
            component: EditPotentialComponent,
            canActivate:[AuthGuard,]
          },
        ],
      },{
        path: 'supervisor',
        component: SupervisorComponent,
        canActivate:[AuthGuard,],
        children: [
          {
            path: '',
            component: SearchSupervisorComponent,
            canActivate:[AuthGuard,]
          },
          {
            path: 'crear',
            component: CreateSupervisorComponent,
            canActivate:[AuthGuard,]
          },
          {
            path: 'editar/:id',
            component: EditSupervisorComponent,
            canActivate:[AuthGuard,]
          },
        ],
      },
      { path: '', redirectTo: 'accidentes', pathMatch: 'full', },
  
    ],
    
  },

  { path: '', redirectTo: 'accidentes', pathMatch: 'full', },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccidenTrackingRoutingModule {}
