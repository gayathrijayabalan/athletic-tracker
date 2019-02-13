import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { CoachserviceService } from '../../shared/coachservice.service';
import { NgForm } from '@angular/forms';
import { User} from '../../shared/user.model';
@Component({
  selector: 'app-studentschedule',
  templateUrl: './studentschedule.component.html',
  styleUrls: ['./studentschedule.component.css']
})
export class StudentscheduleComponent implements OnInit {
  list:User[];
  user:any;
  constructor(public service: CoachserviceService,private afs :AngularFirestore) { }

  ngOnInit() {
    this.resetForm();
    
  }
  resetForm(form?: NgForm) {
    if (form !=null)
    form.resetForm();
    this.service.formworkout= {
      id: null,
      Athlete1: '',
      Date: '',
      Workout1:'',
      Workout2:'', 
      Workout3:'',
      Workout4:'',
    }
  }
  onSubmit(form:NgForm){
    
    let data =form.value;
    this.afs.collection('workout').add(data);
    this.resetForm(form);
    console.log("df");
  }

}
