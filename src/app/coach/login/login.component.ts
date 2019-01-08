import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import{AngularFireAuth} from 'angularfire2/auth';
import{Router} from '@angular/router';
import * as firebase from 'firebase/app';
import { CoachserviceService } from '../../shared/coachservice.service';
import { AuthService } from '../../shared/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logintemp:string;
  message:string;
  constructor(private  afAuth:AngularFireAuth,private router:Router,private service:CoachserviceService,private auth:AuthService){
    
  }
 
  ngOnInit() {

}
}