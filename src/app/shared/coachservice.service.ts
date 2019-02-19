import { Injectable } from '@angular/core';
import{User, Events,Addschedule, Performance,Workout, Studentbyathlete} from './user.model';

import{ AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { AngularFireStorage } from 'angularfire2/storage';
import { BehaviorSubject, Observable} from 'rxjs';
import { switchMap, finalize } from 'rxjs/operators';
import { EventsComponent } from '../coach/events/events.component';




@Injectable({
  providedIn: 'root'  
})
export class CoachserviceService {
formData:User;
formadd:Events;
formexercise:Addschedule;
formsub:Performance;
formworkout:Workout;
formstud:Studentbyathlete;

  constructor(private router:Router, private afs:AngularFirestore) { }
getUser(){
  return this.afs.collection('user').snapshotChanges();
}  
getEvent(){
  return this.afs.collection('events').snapshotChanges()
}
getAddschedule(){
  return this.afs.collection('addschedule').snapshotChanges();
}
getPerformance(){
  return this.afs.collection('performance').snapshotChanges();
}
getStudentbyathlete(){
  return this.afs.collection('Studentbyathlete').snapshotChanges();
}
getProfile(det){
  return this.afs.doc<User>(`addschedule/${det}`  ).valueChanges();
}
getProfiledate(studDate){
  return this.afs.collection('addschedule').snapshotChanges();
  
}
getWorkout(){
  return this.afs.collection('workout').snapshotChanges();
}
loginnext(){
  this.router.navigate(['/dashboard'],{ skipLocationChange: true });
}

getStudent(){
  return this.afs.collection('user').valueChanges();
}

getSchedulestudent(){
  return this.afs.collection('addschedule').snapshotChanges();
}
}