import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { VisitorInfoComponent } from './visitor-info/visitor-info.component';
import { MapComponent } from './map/map.component';
import { ExhibitComponent } from './exhibit/exhibit.component';
import { ScanComponent } from './scan/scan.component';
import { SCARCITYComponent } from './exhibit/scarcity/scarcity.component';
import { DECIDEComponent } from './exhibit/decide/decide.component';

import { MyService } from './my.service';
import { GetZipComponent } from './visitor-info/get-zip/get-zip.component';
import { GetAgeComponent } from './visitor-info/get-age/get-age.component';
import { GetGroupComponent } from './visitor-info/get-group/get-group.component';
import { GetEducationComponent } from './visitor-info/get-education/get-education.component';
import { VisitorThanksComponent } from './visitor-thanks/visitor-thanks.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    VisitorInfoComponent,
    MapComponent,
    ExhibitComponent,
    ScanComponent,
    SCARCITYComponent,
    DECIDEComponent,
    GetZipComponent,
    GetAgeComponent,
    GetGroupComponent,
    GetEducationComponent,
    VisitorThanksComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ZXingScannerModule,
    AppRoutingModule
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
