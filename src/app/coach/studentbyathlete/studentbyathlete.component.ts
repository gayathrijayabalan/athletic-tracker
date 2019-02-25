
import { Component, OnInit } from '@angular/core';
import { CoachserviceService } from '../../shared/coachservice.service';
import { Addschedule } from '../../shared/user.model';
import { NgForm } from '@angular/forms';  
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import 'rxjs/add/observable/combineLatest';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';import { combineLatest } from 'rxjs';


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
  pro:any;
  profile1:any;
  profile2:any;
  det:any;
  show_name:any;
  show_date:any;
  constructor(private service:CoachserviceService,private afs:AngularFirestore) { }

  ngOnInit() {
    this.show_date=false;
    this.show_name=false;
    this.resetForm();
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
    timing:''
  }
}
onSubmit(form:NgForm){
  let data =form.value;
  this.afs.collection('Studentbyathlete').add(data);
  this.resetForm(form);
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
 this.show_name=true;
    console.log(idVal);
  // this.profile = this.service.getProfile("9LRs739uN4r7g11p2doq"
  // );
  this.profile1 = this.afs.collection('addschedule', ref => ref.where('Athlete1','array-contains', idVal)).valueChanges();
  this. profile2= this.afs.collection('workout', ref => ref.where('Athlete','==', idVal)).valueChanges();
 // this.profile=this.profile1;
  // this.profile= combineLatest<any[]>(this.profile1, this.profile2).pipe(
  //   map(arr => arr.reduce((acc, cur) => acc.concat(cur) ) ),
  // )
 
  
  console.log(this.profile);

}
                                  
showdate(a){
  console.log(a);
  this.show_date=true;
  //this.profile = this.afs.collection('addschedule', ref => ref.where('Athlete1','array-contains', a)).valueChanges();
 this.profile = this.afs.collection('workout', ref => ref.where('Date','==', a)).valueChanges();
  console.log(this.profile);
}
}