import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { WhatWentWellComponent } from './what-went-well/what-went-well.component';
import {MatCardModule} from '@angular/material/card';

import { WhatCanBeImprovedComponent } from './what-can-be-improved/what-can-be-improved.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WhatWentWellComponent,
    WhatCanBeImprovedComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,
    
    // matToolbarModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
