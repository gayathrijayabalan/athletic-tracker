import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import {} from '@firebase/auth';
import 'firebase/firestore';


@Injectable({
  providedIn: 'root'  
})
export class CoachserviceService {
  displayName: string;  
  constructor(private router:Router) { }
  
   
}
