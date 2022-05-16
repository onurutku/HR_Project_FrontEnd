import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StepsModule } from 'primeng/steps';
import { MenubarModule } from 'primeng/menubar';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { StepsComponent } from './steps/steps.component';
import { FormComponent } from './form/form.component';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, StepsComponent, FormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    StepsModule,
    TabViewModule,
    ButtonModule,
    InputTextModule,
    RadioButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
