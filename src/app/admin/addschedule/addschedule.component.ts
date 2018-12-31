import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { CoachserviceService } from '../../shared/coachservice.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-addschedule',
  templateUrl: './addschedule.component.html',
  styleUrls: ['./addschedule.component.css']
})
export class AddscheduleComponent implements OnInit {


  constructor(public service: CoachserviceService,public afs :AngularFirestore,) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form !=null)
    form.resetForm();
    this.service.formexercise = {
      id: null,
      Name: '',
      date: '',
      distance: '',
      tag1: '',
      tag2: '',
      tag3: '',
      tag4: '',
      tag5: '',
      tag6: '',
      tag7: '',
      tag8: '',
      tag9: '',
      tag10: '',
    }
  }
  onSubmit(form:NgForm){
    let data =form.value;
    this.afs.collection('addschedule').add(data);
    this.resetForm(form);
  }
}
