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
 
  constructor(private service:CoachserviceService,private afs:AngularFirestore) { }

  ngOnInit() {
    this.resetForm();
  }
 
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id:'',
      fullName:'',
      Email:'',
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
 
 onSubmit(form:NgForm){
   let data=form.value;
   this.afs.collection('user').add(data);
   this.resetForm(form);
   console.log(data);
 }
 

 
}