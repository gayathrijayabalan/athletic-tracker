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
 constructor(private service:CoachserviceService,private firestore:AngularFirestore) { }

  ngOnInit() {
this.resetForm();
 }
  resetForm(form?:NgForm){
    if (form !=null)
    form.resetForm();
    this.service.addData = {
      id:null,
      eventname:'',
      eventdate:'',
      eventcity:'',
      eventcountry:'',
}
  }
  onSubmit(form:NgForm){
    let data=form.value;
    this.firestore .collection('events').add(data);
    this.resetForm(form);
  }

}
