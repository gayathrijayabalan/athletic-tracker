import { Component, OnInit } from '@angular/core';
import { CoachserviceService} from '../../shared/coachservice.service';
import {Events} from '../../shared/user.model';
import { from } from 'rxjs';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  list:Events[];
  constructor(private service:CoachserviceService) { }

  ngOnInit() { this.service.getEvent().subscribe(actionArray=>{
    this.list=actionArray.map(item=>{
      return{
        id: item.payload.doc.id,
        ...item.payload.doc.data()

        
      } as Events
    })
  });

  }

}
