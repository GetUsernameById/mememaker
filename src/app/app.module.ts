import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import {
  MAT_COLOR_FORMATS,
  NGX_MAT_COLOR_FORMATS,
  NgxMatColorPickerModule,
} from '@angular-material-components/color-picker';
import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSelectModule,
    NgxMatColorPickerModule,
    MatButtonModule,
    DragDropModule,
  ],
  providers: [{ provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }],
  bootstrap: [AppComponent],
})
export class AppModule {}
