import { Injectable } from '@angular/core';
import {User} from './user.model';
import { Router } from '@angular/router'; 
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore'
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';import { AngularFireAuth, } from 'angularfire2/auth';
import{take} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users$ : Observable<User>;
  authState = null;
  error: any = null;
  uid$;
  user;
  property:any;
  phonenumber1:number;
  usersdocument:any;
  data: Observable<any[]>;
  data$:any;
  constructor(private afAuth : AngularFireAuth, private afs : AngularFirestore, private router : Router
  ) {
  }
}