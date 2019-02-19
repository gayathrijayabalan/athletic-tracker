
import { Component, OnInit } from '@angular/core';
import { CoachserviceService } from '../../shared/coachservice.service';
import { Addschedule } from '../../shared/user.model';
import { NgForm } from '@angular/forms';  
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
@Component({
  selector: 'app-studentbyathlete',
  templateUrl: './studentbyathlete.component.html',
  styleUrls: ['./studentbyathlete.component.css']
})


// export class StudentbyathleteComponent {
//   selectedDay: string = '';

//   //event handler for the select element's change event
//   selectChangeHandler (event: any) {
//     //update the ui
//     this.selectedDay = event.target.value;
//   }
// }
export class StudentbyathleteComponent implements OnInit {
  list:Addschedule[];
  profile:any;
  det:any;
  eve:any;
  constructor(private service:CoachserviceService,private afs:AngularFirestore) { }

  ngOnInit() {
    this.service.getAddschedule().subscribe(actionArray=>{
      this.list=actionArray.map(item=>{
        return{
          id:item.payload.doc.id,
          ...item.payload.doc.data()

        } as Addschedule;
      })
    });
  }
  resetForm(form?: NgForm){
    if(form !=null)
    form.resetForm();
    this.service.formstud={
      id:'',
      heartbeatrate:'',
      injure:'',
      rest:'',
      notes:'',
    }
  }
//   onEdit(exercise:Addschedule){
//     this.service.formexercise=Object.assign({},exercise);
// }
// onDelete(id:string){
//   if(confirm("are you to delete this record")){
//     this.afs.doc('Addschedule/'+id).delete();
  
//   }
// }
showStudent(eve){
  const idVal = eve.target.value;
    console.log(idVal);
  this.profile = this.service.getProfile(idVal);
  console.log(this.profile+"fafafda");
}
                                  
showdate(a){
  console.log(a);
  this.profile = this.afs.collection('workout', ref => ref.where('Date','==', a)).valueChanges();
  console.log(this.profile);
}
}