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
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'visitorInfo', component: VisitorInfoComponent },
  { path: 'map', component: MapComponent },
  { path: 'scan', component: ScanComponent },
  { path: 'exh-SCARCITY', component: SCARCITYComponent },
  { path: 'exh-DECIDE', component: DECIDEComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
