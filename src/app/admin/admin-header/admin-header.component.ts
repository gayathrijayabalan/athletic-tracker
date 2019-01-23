import { Component, OnInit } from '@angular/core';

import{AngularFireAuth} from 'angularfire2/auth';
import{Router} from '@angular/router';
import * as firebase from 'firebase/app';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

}
