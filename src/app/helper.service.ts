import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  nextIndexCarrier: Subject<number> = new Subject<number>();
  genderCarrier: Subject<string> = new Subject<string>();
  constructor() {}
}
