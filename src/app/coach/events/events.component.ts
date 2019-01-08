import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { CoachserviceService} from '../../shared/coachservice.service';
import {Events} from '../../shared/user.model';
import { from } from 'rxjs';
=======
import { Events } from '../../shared/user.model';
import { CoachserviceService } from '../../shared/coachservice.service';
>>>>>>> 923c4e1e5ce20ec68d0ad43a7f504092ead554dc
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  list:Events[];
  constructor(private service:CoachserviceService) { }
<<<<<<< HEAD

  ngOnInit() { this.service.getEvent().subscribe(actionArray=>{
    this.list=actionArray.map(item=>{
      return{
        id: item.payload.doc.id,
        ...item.payload.doc.data()

        
=======

  ngOnInit() { this.service.getEvent().subscribe(actionArray=>{
    this.list=actionArray.map(item=>{
      return{
        id: item.payload.doc.id,
        ...item.payload.doc.data()
>>>>>>> 923c4e1e5ce20ec68d0ad43a7f504092ead554dc
      } as Events
    })
  });

  }
}