import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengtheningComponent } from './strengthening.component';

describe('StrengtheningComponent', () => {
  let component: StrengtheningComponent;
  let fixture: ComponentFixture<StrengtheningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrengtheningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrengtheningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
