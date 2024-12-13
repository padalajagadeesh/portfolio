import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusebuleComponent } from './reusebule.component';

describe('ReusebuleComponent', () => {
  let component: ReusebuleComponent;
  let fixture: ComponentFixture<ReusebuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReusebuleComponent]
    });
    fixture = TestBed.createComponent(ReusebuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
