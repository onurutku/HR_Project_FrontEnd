import { Component, OnInit } from '@angular/core';
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
  gender: string;
  bloodTypes: any[];
  constructor(private router: Router, private helper: HelperService) {}

  ngOnInit(): void {
    this.bloodTypes = [
      { name: 'A Rh+' },
      { name: 'A Rh-' },
      { name: 'B Rh+' },
      { name: 'B Rh-' },
      { name: 'AB Rh+' },
      { name: 'AB Rh-' },
      { name: '0 Rh+' },
      { name: '0 Rh-' },
    ];
    //Reactive form formGroup description and form validations
    this.personalInfo = new FormGroup({
      gender: new FormControl(null, Validators.required),
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      dateofbirth: new FormControl(null, Validators.required),
      nationality: new FormControl(null, Validators.required),
      identity: new FormControl(
        null,
        Validators.compose([
          Validators.required,
          Validators.min(10000000000),
          Validators.max(99999999999),
        ])
      ),
      city: new FormControl(null, Validators.required),
      country: new FormControl(null, Validators.required),
      status: new FormControl(null, Validators.required),
      kids: new FormControl(null, [Validators.required, Validators.min(0)]),
      singlelastname: new FormControl(null, Validators.required),
      dateofmarriage: new FormControl(null, Validators.required),
      bloodtype: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      addressdistrict: new FormControl(null, Validators.required),
      addresscity: new FormControl(null, Validators.required),
      addresscountry: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      homephone: new FormControl(null),
      mobilephone: new FormControl(null, Validators.required),
      preferedfirstname: new FormControl(null, Validators.required),
      preferedlastname: new FormControl(null, Validators.required),
      orionemailaddress: new FormControl(null, Validators.required),
      sgkstarted: new FormControl(null, Validators.required),
    });
  }
  //step up method for first page
  stepUp() {
    const personalInfo = {
      firstname: this.personalInfo.get('firstname').value,
      lastname: this.personalInfo.get('lastname').value,
      gender: this.personalInfo.get('gender').value,
      dateofbirth: this.personalInfo.get('dateofbirth').value,
      nationality: this.personalInfo.get('nationality').value,
      identity: this.personalInfo.get('identity').value,
      city: this.personalInfo.get('city').value,
      country: this.personalInfo.get('country').value,
      status: this.personalInfo.get('status').value,
      kids: this.personalInfo.get('kids').value,
      singlelastname: this.personalInfo.get('singlelastname').value,
      dateofmarriage: this.personalInfo.get('dateofmarriage').value,
      bloodtype: this.personalInfo.get('bloodtype').value,
      address: this.personalInfo.get('address').value,
      addressdistrict: this.personalInfo.get('addressdistrict').value,
      addresscity: this.personalInfo.get('addresscity').value,
      addresscountry: this.personalInfo.get('addresscountry').value,
      email: this.personalInfo.get('email').value,
      homephone: this.personalInfo.get('homephone').value,
      mobilephone: this.personalInfo.get('mobilephone').value,
      preferedfirstname: this.personalInfo.get('preferedfirstname').value,
      preferedlastname: this.personalInfo.get('preferedlastname').value,
      orionemailaddress:
        this.personalInfo.get('orionemailaddress').value + '@orioninc.com',
      sgkstarted: this.personalInfo.get('sgkstarted').value,
    };

    this.gender = this.personalInfo.get('gender').value;
    //if else for check if user is woman or man. we'll skip next step with that info or not!
    if (this.gender === 'kadin') {
      this.router.navigate(['/family-info']);
      this.helper.nextIndexCarrier.next(2);
    } else {
      this.router.navigate(['/military-info']);
      this.helper.nextIndexCarrier.next(1);
    }
    //trigger subject to send gender information to stepper
    this.helper.genderCarrier.next(this.gender);
  }
}
