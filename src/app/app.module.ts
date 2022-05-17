import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StepsModule } from 'primeng/steps';
import { MenubarModule } from 'primeng/menubar';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { StepsComponent } from './steps/steps.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MilitaryInfoComponent } from './military-info/military-info.component';
import { FamilyInfoComponent } from './family-info/family-info.component';
import { EmergencyInfoComponent } from './emergency-info/emergency-info.component';
import { BankInfoComponent } from './bank-info/bank-info.component';
import { LanguageInfoComponent } from './language-info/language-info.component';
import { EducationInfoComponent } from './education-info/education-info.component';
import { ExperienceInfoComponent } from './experience-info/experience-info.component';
import { SummaryComponent } from './summary/summary.component';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StepsComponent,
    PersonalInfoComponent,
    MilitaryInfoComponent,
    FamilyInfoComponent,
    EmergencyInfoComponent,
    BankInfoComponent,
    LanguageInfoComponent,
    EducationInfoComponent,
    ExperienceInfoComponent,
    SummaryComponent,
  ],
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
    CalendarModule,
    BrowserAnimationsModule,
    DropdownModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
