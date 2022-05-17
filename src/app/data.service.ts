import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  postPersonalInfo(personalInfo) {
    this.http
      .post('http://localhost:3000/users', personalInfo)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
