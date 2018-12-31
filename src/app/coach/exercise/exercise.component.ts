import { Component, OnInit } from '@angular/core';
import { CoachserviceService } from '../../shared/coachservice.service';
import { Addschedule } from '../../shared/user.model';
import {  AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {
  list1:Addschedule[];
  constructor(private service:CoachserviceService,private afs:AngularFirestore) { }

  ngOnInit() {
    this.service.getAddschedule().subscribe(actionArray=>{
      this.list1=actionArray.map(item=>{
        return{
          id:item.payload.doc.id,
          ...item.payload.doc.data()

        } as Addschedule;
      })
    });
  }
//   onEdit(exercise:Addschedule){
//     this.service.formexercise=Object.assign({},exercise);
// }
// onDelete(id:string){
//   if(confirm("are you to delete this record")){
//     this.afs.doc('Addschedule/'+id).delete();
  
//   }
// }

}
