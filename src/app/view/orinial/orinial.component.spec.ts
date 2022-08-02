import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrinialComponent } from './orinial.component';

describe('OrinialComponent', () => {
  let component: OrinialComponent;
  let fixture: ComponentFixture<OrinialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrinialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrinialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
