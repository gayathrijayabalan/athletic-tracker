import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable , of } from 'rxjs';
import {switchMap} from 'rxjs/operators'

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;

  fcmTokens?: { [token: string]: true };
}


@Injectable()
export class AuthService {

  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
constructor(private _firebaseAuth: AngularFireAuth, private router: Router) { 
      this.user = _firebaseAuth.authState;
this.user.subscribe(
        (user) => {
          if (user) {
            this.userDetails = user;
            console.log(this.userDetails);
          }
          else {
            this.userDetails = null;
          }
        }
      );
  }
  signInWithGoogle() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
    .then((res) => { 
      this.router.navigate(['/dashboard'])
    })
  .catch((err) => console.log(err));
}
  
isLoggedIn() {
  if (this.userDetails == null ) {
      return false;
    } else {
      return true;
    }
  }
logout() {
    this._firebaseAuth.auth.signOut()
    .then((res) => this.router.navigate(['/']));
  }

  }



 


  

  

