import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Steps } from 'primeng/steps';
import { Subscription } from 'rxjs';
import { HelperService } from '../helper.service';
@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
})
export class StepsComponent implements OnInit, OnDestroy {
  public items: MenuItem[];
  activeIndex: number = 0;
  buttonName: string = 'İleri';
  indexSubscription: Subscription;
  genderSubscription: Subscription;
  constructor(private helper: HelperService) {}

  ngOnInit(): void {
    this.items = [
      { label: 'Kişisel Bilgiler', routerLink: 'personal-info' },
      {
        label: 'Askerlik Bilgileri',
        routerLink: 'military-info',
      },
      { label: 'Aile Bilgileri', routerLink: 'family-info' },
      { label: 'Acil Durum Bilgileri', routerLink: 'emergency-info' },
      { label: 'Banka Bilgileri', routerLink: 'bank-info' },
      { label: 'Yabancı Dil Bilgisi', routerLink: 'language-info' },
      { label: 'Eğitim Bilgileri', routerLink: 'education-info' },
      { label: 'Önceki İş Tecrübeleri', routerLink: 'experience-info' },
      { label: 'Özet', routerLink: 'summary' },
    ];
    this.helper.nextIndexCarrier.subscribe((index) => {
      this.activeIndex = index;
    });
    this.helper.genderCarrier.subscribe((gender) => {
      console.log('geldi');

      if (gender === 'kadin') {
        this.items[1].disabled = true;
      } else {
        this.items[1].disabled = false;
        console.log(this.items[1].disabled);
      }
    });
  }
  ngOnDestroy(): void {
    if (this.indexSubscription) this.indexSubscription.unsubscribe();
    if (this.genderSubscription) this.genderSubscription.unsubscribe();
  }
  indexChange(event: number) {
    this.activeIndex = event;
  }
}
