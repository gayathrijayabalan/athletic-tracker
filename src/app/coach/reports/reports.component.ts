import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CoachserviceService } from '../../shared/coachservice.service';
import { User } from '../../shared/user.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  list:User[];
  
 
  constructor(private afAuth:AngularFireAuth,private router:Router,private service:CoachserviceService) { 

  }

  ngOnInit() {
    this.service.getSchedulestudent().subscribe(actionArrray=>{
      this.list=actionArrray.map(item=>{
        return {
          id:item.payload.doc.id,
          ...item.payload.doc.data()}as User;
      })    
    });

  
  }

}