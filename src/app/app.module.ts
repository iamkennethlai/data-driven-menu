import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataMenuComponent } from './data-menu/data-menu.component';
import { FormComponent } from './form/form.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    DataMenuComponent,
    FormComponent,
    SubMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
