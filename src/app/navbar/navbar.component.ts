import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import{AngularFireAuth} from 'angularfire2/auth';
import{Router} from '@angular/router';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit() {
  }

}