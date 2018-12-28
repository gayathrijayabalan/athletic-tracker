import { Injectable } from '@angular/core';
import{User, Events} from './user.model';

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
addData:Events;

  constructor(private router:Router, private afs:AngularFirestore) { }
getUser(){
  return this.afs.collection('user').snapshotChanges();
}  

} 
