import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { WhatWentWellComponent } from './what-went-well/what-went-well.component';
import {MatCardModule} from '@angular/material/card';

import { WhatCanBeImprovedComponent } from './what-can-be-improved/what-can-be-improved.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StartDoingComponent } from './start-doing/start-doing.component';
import { ActionItemsComponent } from './action-items/action-items.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WhatWentWellComponent,
    WhatCanBeImprovedComponent,
    StartDoingComponent,
    ActionItemsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
    // matToolbarModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
