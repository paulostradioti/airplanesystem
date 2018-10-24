import * as _ from 'lodash';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { GridAirplaneComponent } from './grid-airplane/grid-airplane.component';
import { AddOrUpdateAirplaneComponent } from './add-or-update-airplane/add-or-update-airplane.component';
import { AirplaneService } from './airplane.service';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    GridAirplaneComponent,
    AddOrUpdateAirplaneComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'list', component: GridAirplaneComponent },
      { path: 'edit', component: AddOrUpdateAirplaneComponent },
    ])
  ],
  providers: [AirplaneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
