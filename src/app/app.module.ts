import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Design1Component } from './design1/design1.component';
import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    Design1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HomeModule,
    BrowserAnimationsModule,
    // MatTableModule,
    MaterialModule
  ],
  exports:[  AuthModule,
    HomeModule,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
