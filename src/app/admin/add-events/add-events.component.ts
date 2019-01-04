import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { CoachserviceService } from 'src/app/shared/coachservice.service';
@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.css']
})

export class AddEventsComponent implements OnInit {
 constructor(public service:CoachserviceService,private afs:AngularFirestore) { }

  ngOnInit() {
this.resetForm();
 }
  resetForm(form?:NgForm){
    if (form !=null)
    form.resetForm();
    this.service.formadd = {
      id:null,
      eventname:'',
      eventdate:'',
      eventcity:'',
      eventcountry:'',
      athleteattendings:'',
      medalswon:''
}
console.log("dgh");
  }
 
  onSubmit(form:NgForm){
    console.log("dddddd");
    let data=form.value;
    this.afs.collection('events').add(data);
    this.resetForm(form);
    console.log(data+"events");
  }

}
