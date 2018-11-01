import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AerobicComponent } from './aerobic.component';

describe('AerobicComponent', () => {
  let component: AerobicComponent;
  let fixture: ComponentFixture<AerobicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AerobicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AerobicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
