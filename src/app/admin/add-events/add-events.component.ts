import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/shared/events.service';
import {AngularFirestore} from 'angularfire2/firestore'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.css']
})
export class AddEventsComponent implements OnInit {

  constructor(private service:EventsService,private afs:AngularFirestore) { }

  ngOnInit() {
    this.resetForm();
  }
resetForm(form?: NgForm) {
  
  form.resetForm();
 this.service.formData = {
eventName:'',
 }
}
}
