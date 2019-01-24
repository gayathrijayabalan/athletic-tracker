import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentbyathleteComponent } from './studentbyathlete.component';

describe('StudentbyathleteComponent', () => {
  let component: StudentbyathleteComponent;
  let fixture: ComponentFixture<StudentbyathleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentbyathleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentbyathleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
