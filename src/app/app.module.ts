import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerService } from './customerservice';
import {CheckboxModule} from 'primeng/checkbox';
import {TableModule} from 'primeng/table';
import { ColorComponent } from './color/color.component';
import {MultiSelectModule} from 'primeng/multiselect';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';


import {InputSwitchModule} from 'primeng/inputswitch';
@NgModule({
  declarations: [
    AppComponent,
    ColorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CheckboxModule,
    TableModule,
    MultiSelectModule,
    CalendarModule,
    DropdownModule,
    ProgressBarModule,
    InputTextModule,
    InputSwitchModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
