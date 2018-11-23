import { Component, OnInit } from '@angular/core';
import { CoachserviceService } from '../../shared/coachservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error:{name:string,  message: string}= { name: '', message: '' }; 

  constructor(private coachser:CoachserviceService) { }
  login(email,password){
    

  }

  ngOnInit() {
    

  }

}
