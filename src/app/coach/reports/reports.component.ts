import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  public user: firebase.User;
  public authState$: Observable<firebase.User>;
  private authProvider: any;
  constructor(private afAuth:AngularFireAuth,private router:Router) { 
    this.authState$=afAuth.authState;
    this.authState$.subscribe(user=>this.user=user);
  }

  ngOnInit() {
  }

}
