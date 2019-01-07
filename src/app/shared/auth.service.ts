import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable , of } from 'rxjs';
import {switchMap} from 'rxjs/operators'

interface User {a
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;

  fcmTokens?: { [token: string]: true };
}


@Injectable()
export class AuthService {

  user: Observable<User>;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {

      //// Get auth data, then get firestore user document || null
    
      
  }



  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then(() => {
       
        this.router.navigate(['/dashboard']);
      })
  }




 
  

}