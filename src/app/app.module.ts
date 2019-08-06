import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
    DECIDEComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ZXingScannerModule,
    AppRoutingModule
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
