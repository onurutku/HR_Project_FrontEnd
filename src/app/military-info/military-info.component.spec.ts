import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilitaryInfoComponent } from './military-info.component';

describe('MilitaryInfoComponent', () => {
  let component: MilitaryInfoComponent;
  let fixture: ComponentFixture<MilitaryInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilitaryInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MilitaryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
