import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { VisitorInfoComponent } from './visitor-info/visitor-info.component';
import { MapComponent } from './map/map.component';
import { ExhibitComponent } from './exhibit/exhibit.component';
import { ScanComponent } from './scan/scan.component';
import { SCARCITYComponent } from './exhibit/scarcity/scarcity.component';
import { DECIDEComponent } from './exhibit/decide/decide.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', data: { animation: 'HomePage' } },
  { path: 'visitorInfo', component: VisitorInfoComponent, data: { animation: 'VisitorPage' } },
  { path: 'map', component: MapComponent, data: { animation: 'MapPage' } },
  { path: 'scan', component: ScanComponent, data: { animation: 'ScanPage' } },
  { path: 'exh-SCARCITY', component: SCARCITYComponent, data: { animation: 'ScarcityExhibitPage' } },
  { path: 'exh-DECIDE', component: DECIDEComponent, data: { animation: 'DecideExhibitPage' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
