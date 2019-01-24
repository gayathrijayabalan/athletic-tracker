import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { CoachserviceService } from 'src/app/shared/coachservice.service';
@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {

  constructor(public service:CoachserviceService,private afs:AngularFirestore) { }

  ngOnInit() {
this.resetForm();
 }
  resetForm(form?:NgForm){
    if (form !=null)
    form.resetForm();
    this.service.formsub = {
      id:'',
      timings:'',
      heartbeatrate:'',
       notes:'',
       rest:''
      }

  }

  onSubmit(form:NgForm){
   
    let data=form.value;
    this.afs.collection('performance').add(data);
    this.resetForm(form);
   
  }

}