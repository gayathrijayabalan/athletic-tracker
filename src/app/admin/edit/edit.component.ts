import { Component, OnInit, Input} from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { CoachserviceService } from '../../shared/coachservice.service';
import { NgForm,NgModel } from '@angular/forms';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { User } from '../../shared/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent {
  profile:any;
Rest:any;
  user:any;
  item:any;
  exercisen:any;
  showMsg: boolean = false;
  // athlete1:any[];
  // athletee:any[];
  constructor(public service: CoachserviceService,private router: Router,private afs :AngularFirestore, private route: ActivatedRoute) { }

 
  ngOnInit() {
this.route.queryParams.subscribe(params => {
    this.exercisen=params.ExerciseName;
    console.log(this.exercisen)
});
   
  }
  ngAfterViewInit() 
  {
    this.profile = this.afs.collection<any>('addschedule', ref => ref.where('ExerciseName','==', this.exercisen)).valueChanges();
    console.log(this.exercisen)
  }
  
  onSubmit(form:NgForm){
    let data =form.value;
    console.log(data+"acfdd");
    this.afs.collection('addschedule').add(data);
    
    this.showMsg=true;
  }


  }
