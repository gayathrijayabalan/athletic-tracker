import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, NgForm} from '@angular/forms';
import { CoachserviceService } from '../../shared/coachservice.service';
import {AngularFirestore} from 'angularfire2/firestore'


@Component({
  selector: 'app-athlete',
  templateUrl: './athlete.component.html',
  styleUrls: ['./athlete.component.css']
})
export class AthleteComponent implements OnInit {
 
  constructor(public service:CoachserviceService,private afs:AngularFirestore) { }

  ngOnInit() {
    this.resetForm();
  }
 
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id:'',
      fullName:'',
      email:'',
      phone:'',
      dob:'',
      class:'',
      age:'',
      yearofadmin:'',
      bloodgroup:'',
      height:'',
      weight:'',
    
    }
  }
 
 onSubmit(form:NgForm,name:any){
   let data=form.value;
   this.afs.doc(`user/${name}`).set(data);
   this.resetForm(form);
   console.log(data);
 }
 

 
}