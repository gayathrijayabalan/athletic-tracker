import { Injectable } from '@angular/core';
import{User, Events, Addschedule, Workout, Studentbyathlete,Issue} from './user.model';

import{ AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { AngularFireStorage } from 'angularfire2/storage';
import { BehaviorSubject, Observable} from 'rxjs';
import { switchMap, finalize } from 'rxjs/operators';
import { EventsComponent } from '../coach/events/events.component';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';



@Injectable({
  providedIn: 'root'  
})

export class CoachserviceService {
formData:User;
formadd:Events;
formexercise:Addschedule;
formstud:Studentbyathlete;
formworkout:Workout;


  constructor(private router:Router, private afs:AngularFirestore,private httpClient: HttpClient) { }
  getUsers(){
    return this.afs.collection('userss').snapshotChanges();
  }
  
  getUserss(userKey){
    return this.afs.collection('userss').doc(userKey).snapshotChanges();
  }

  searchUsers(searchValue){
    return this.afs.collection('userss',ref => ref.where('nameToSearch', '>=', searchValue)
      .where('nameToSearch', '<=', searchValue + '\uf8ff'))
      .snapshotChanges()
  }

  searchUsersByAge(value){
    return this.afs.collection('userss',ref => ref.orderBy('age').startAt(value)).snapshotChanges();
  }

  deleteUser(userKey){
    return this.afs.collection('userss').doc(userKey).delete();
  }




getUser(){
  return this.afs.collection('user').snapshotChanges();
}  
getEvent(){
  return this.afs.collection('events').snapshotChanges()
}
getAddschedule(){
  return this.afs.collection('addschedule').snapshotChanges();
}
getStudentbyathlete(){
  return this.afs.collection('Studentbyathlete').snapshotChanges();
}
getStudentName(){
  return this.afs.collection('user').snapshotChanges();
}

getProfile(det){
  return this.afs.doc<User>(`addschedule/${det}`  ).valueChanges();
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
