import { Component, OnInit } from '@angular/core';
import { Performance } from '../../shared/user.model';
import { CoachserviceService } from '../../shared/coachservice.service';

@Component({
  selector: 'app-student-performance',
  templateUrl: './student-performance.component.html',
  styleUrls: ['./student-performance.component.css']
})
export class StudentPerformanceComponent implements OnInit {



  list:Performance[];
  constructor(private service:CoachserviceService) { }
  ngOnInit() { this.service.getPerformance().subscribe(actionArray=>{
    this.list=actionArray.map(item=>{
      return{
        id: item.payload.doc.id,
        ...item.payload.doc.data()
      } as Performance
    })
  });

  }
}
  