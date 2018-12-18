import { Injectable } from '@angular/core';


import{} from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { AngularFireStorage } from 'angularfire2/storage';
import { BehaviorSubject, Observable} from 'rxjs';
import { switchMap, finalize } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'  
})
export class CoachserviceService {
  displayName: string;  
  email;
  phone;
  dob;

  constructor(private router:Router) { }
  
  clientlogin(email,pass)
  {
    // this.uid$ = this.afAuth.auth.currentUser.uid;
    // console.log(this.getuserdata(this.uid$)+"isis")
    return this.clientlogin
  } 
} 
