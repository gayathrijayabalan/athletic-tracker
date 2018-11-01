import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StridesComponent } from './strides.component';

describe('StridesComponent', () => {
  let component: StridesComponent;
  let fixture: ComponentFixture<StridesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StridesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StridesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
