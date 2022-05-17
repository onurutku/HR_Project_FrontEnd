import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { HelperService } from '../helper.service';
@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
})
export class StepsComponent implements OnInit, OnDestroy {
  public items: MenuItem[];
  activeIndex: number = 0; // set active index
  indexSubscription: Subscription;
  genderSubscription: Subscription;
  constructor(private helper: HelperService) {}

  ngOnInit(): void {
    //primeng steps menu item
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
    //subscription for get current index
    this.helper.nextIndexCarrier.subscribe((index) => {
      this.activeIndex = index;
    });
    //subscription for get gender to skip military step or not
    this.helper.genderCarrier.subscribe((gender) => {
      if (gender === 'kadin') {
        this.items[1].disabled = true;
      } else {
        this.items[1].disabled = false;
      }
    });
  }
  //subscription cancellelation on end of the components lifecycle
  ngOnDestroy(): void {
    if (this.indexSubscription) this.indexSubscription.unsubscribe();
    if (this.genderSubscription) this.genderSubscription.unsubscribe();
  }
  //click manually on the steps menu auto set current index
  indexChange(event: number) {
    this.activeIndex = event;
  }
}
