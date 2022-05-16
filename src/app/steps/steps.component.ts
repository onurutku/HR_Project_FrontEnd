import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Steps } from 'primeng/steps';
@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
})
export class StepsComponent implements OnInit {
  @ViewChild('stepper') stepper: Steps;
  items: MenuItem[];
  activeIndex: number = 0;
  buttonName: string = 'İleri';
  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Kişisel Bilgiler',
        command: (e) => {
          console.log('hello');
          this.activeIndex = 0;
        },
      },
      {
        label: 'Askerlik Bilgileri',
        command: (e) => {
          console.log('merhaba');
          this.activeIndex = 1;
        },
      },
      { label: 'Aile Bilgileri' },
      { label: 'Acil Durum Bilgileri' },
      { label: 'Banka Bilgileri' },
      { label: 'Yabancı Dil Bilgisi' },
      { label: 'Eğitim Bilgileri' },
      { label: 'Önceki İş Tecrübeleri' },
      { label: 'Özet' },
    ];
  }
  stepDown() {
    // if (this.activeIndex != 0) this.activeIndex -= 1;
    // if (this.activeIndex != 8) this.buttonName = 'İleri';
    this.stepper.activeIndexChange.emit(this.activeIndex--);
  }
  stepUp() {
    this.stepper.activeIndexChange.emit(this.activeIndex++);

    // if (this.activeIndex == 7) this.buttonName = 'Kaydet';

    // if (this.activeIndex != 8) this.activeIndex += 1;
  }
  indexChange(event: Event) {
    console.log(event);
    console.log('index');
  }
}
