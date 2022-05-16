import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankInfoComponent } from './bank-info/bank-info.component';
import { EducationInfoComponent } from './education-info/education-info.component';
import { EmergencyInfoComponent } from './emergency-info/emergency-info.component';
import { ExperienceInfoComponent } from './experience-info/experience-info.component';
import { FamilyInfoComponent } from './family-info/family-info.component';
import { LanguageInfoComponent } from './language-info/language-info.component';
import { MilitaryInfoComponent } from './military-info/military-info.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'personal-info',
    pathMatch: 'full',
  },
  {
    path: 'personal-info',
    component: PersonalInfoComponent,
  },
  { path: 'military-info', component: MilitaryInfoComponent },
  {
    path: 'family-info',
    component: FamilyInfoComponent,
  },
  {
    path: 'emergency-info',
    component: EmergencyInfoComponent,
  },
  { path: 'bank-info', component: BankInfoComponent },
  { path: 'language-info', component: LanguageInfoComponent },
  { path: 'education-info', component: EducationInfoComponent },
  { path: 'experience-info', component: ExperienceInfoComponent },
  { path: 'summary', component: SummaryComponent },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
