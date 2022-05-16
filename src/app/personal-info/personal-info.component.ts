import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-form',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent implements OnInit {
  personalInfo: FormGroup;
  selectedValue: string;
  @Input() activeIndex: number;
  gender: string;
  constructor(private router: Router, private helper: HelperService) {}

  ngOnInit(): void {
    this.personalInfo = new FormGroup({
      gender: new FormControl(null, Validators.required),
    });
  }
  stepUp() {
    this.gender = this.personalInfo.get('gender').value;
    if (this.gender === 'kadin') {
      this.router.navigate(['/family-info']);
      this.helper.nextIndexCarrier.next(2);
      this.helper.genderCarrier.next(this.gender);
    } else {
      this.router.navigate(['/military-info']);
      this.helper.nextIndexCarrier.next(1);
    }
  }
}
