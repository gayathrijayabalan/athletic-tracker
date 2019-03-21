import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentdetailviewComponent } from './studentdetailview.component';

describe('StudentdetailviewComponent', () => {
  let component: StudentdetailviewComponent;
  let fixture: ComponentFixture<StudentdetailviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentdetailviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentdetailviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
