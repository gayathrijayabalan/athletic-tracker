import { Component, OnInit } from '@angular/core';
import { CoachserviceService } from '../../shared/coachservice.service';
import { Addschedule, Workout } from '../../shared/user.model';
import {  AngularFirestore,} from 'angularfire2/firestore';


@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {
  newTrustFormVisible: false;
  
  list:Addschedule[];
  list1:Workout[];
  constructor(private service:CoachserviceService,private afs:AngularFirestore) { 
    
  }

  ngOnInit() {
    this.service.getAddschedule().subscribe(actionArray=>{
      this.list=actionArray.map(item=>{
        return{
          id:item.payload.doc.id,
          ...item.payload.doc.data()

        } as Addschedule;
      })
    });
    this.service.getWorkout().subscribe(actionArray=>{
      this.list1=actionArray.map(item=>{
        return{
          id:item.payload.doc.id,
          ...item.payload.doc.data()

        } as Workout;
      })
    });
  }
}
