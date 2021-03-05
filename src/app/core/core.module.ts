import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BaseLayoutComponent],
  imports: [BrowserModule, BrowserAnimationsModule, RouterModule],
  exports: [BaseLayoutComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoreModule {}
