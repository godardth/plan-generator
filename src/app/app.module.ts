import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfiguratorComponent } from './configurator/configurator.component';
import { PlanComponent } from './plan/plan.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfiguratorComponent,
    PlanComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
