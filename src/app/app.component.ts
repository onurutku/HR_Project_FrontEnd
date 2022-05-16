import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'MEAN';
  subTitle: string = 'İNSAN KAYNAKLARI BİLGİ TOPLAMA FORMU';
  constructor() {}
  ngOnInit(): void {}
}
