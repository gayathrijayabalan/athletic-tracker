import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StretchingComponent } from './stretching.component';

describe('StretchingComponent', () => {
  let component: StretchingComponent;
  let fixture: ComponentFixture<StretchingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StretchingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StretchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
