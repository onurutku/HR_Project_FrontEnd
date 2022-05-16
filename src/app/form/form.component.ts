import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  selectedValue: number;
  @Input() activeIndex: number;
  constructor() {}

  ngOnInit(): void {}
}
