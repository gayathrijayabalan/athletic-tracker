import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import{AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private  afAuth:AngularFireAuth){
    
  }
  login(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    console.log("gguj");
  }
  logout(){
    this.afAuth.auth.signOut();
  }
  
  
  ngOnInit() {

}
}