import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { VisitorInfoComponent } from './visitor-info/visitor-info.component';
import { MapComponent } from './map/map.component';
import { ExhibitComponent } from './exhibit/exhibit.component';
import { ScanComponent } from './scan/scan.component';
import { SCARCITYComponent } from './exhibit/scarcity/scarcity.component';
import { DECIDEComponent } from './exhibit/decide/decide.component';
import { GetZipComponent } from './visitor-info/get-zip/get-zip.component';
import { GetAgeComponent } from './visitor-info/get-age/get-age.component';
import { GetGroupComponent } from './visitor-info/get-group/get-group.component';
import { GetEducationComponent } from './visitor-info/get-education/get-education.component';
import { VisitorThanksComponent } from './visitor-thanks/visitor-thanks.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', data: { animation: 'HomePage' } },
  {
    path: 'visitorInfo', component: VisitorInfoComponent, data: { animation: 'VisitorPage' }, children: [
      { path: '', component: GetZipComponent, data: { animation: 'GetZipPage0' } },
      { path: 'getZip', component: GetZipComponent, data: { animation: 'GetZipPage' } },
      { path: 'getAge', component: GetAgeComponent, data: { animation: 'GetAgePage' } },
      { path: 'getGroup', component: GetGroupComponent, data: { animation: 'GetGroupPage' } },
      { path: 'getEducation', component: GetEducationComponent, data: { animation: 'GetEducationPage' } },
    ]
  },
  { path: 'thanks', component: VisitorThanksComponent, data: { animation: 'ThanksPage' } },
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
