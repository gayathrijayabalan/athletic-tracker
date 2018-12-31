import { Component, OnInit,HostBinding } from '@angular/core';
import  {AngularFireAuth}  from 'angularfire2/auth';
import * as  firebase from  'firebase/app'; 
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

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