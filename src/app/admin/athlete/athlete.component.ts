import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, NgForm} from '@angular/forms';
import { CoachserviceService } from '../../shared/coachservice.service';
import {AngularFirestore} from 'angularfire2/firestore'
import  {Observable}  from  'rxjs';


@Component({
  selector: 'app-athlete',
  templateUrl: './athlete.component.html',
  styleUrls: ['./athlete.component.css']
})
export class AthleteComponent implements OnInit {
  downloadURL : Observable<string | null>;
  profilepicRef: any;
  uid;
  property:any;
  name: any;
  email: any;
  phone: any;
  profile: any;
  brokerage: any;
  userid:any;
  phonenumber: number;
  url:any;
  uploads: any[];
  allPercentage: Observable<any>;
  files: Observable<any>;
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
      designation:'',
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