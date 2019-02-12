import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { CoachserviceService } from '../../shared/coachservice.service';
import { NgForm } from '@angular/forms';
import { toDate } from '@angular/common/src/i18n/format_date';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-addschedule',
  templateUrl: './addschedule.component.html',
  styleUrls: ['./addschedule.component.css']
})
  export class AddscheduleComponent implements OnInit {
profile:any;
list:User[];

  constructor(public service: CoachserviceService,private afs :AngularFirestore) { }

  ngOnInit() {
    this.resetForm();
    this.service.getUser().subscribe(actionArrray=>{
      this.list=actionArrray.map(item=>{
        return {
          id:item.payload.doc.id,
          ...item.payload.doc.data()}as User;
      })
    });

  
  }
    resetForm(form?: NgForm) {
      if (form !=null)
      form.resetForm();
      this.service.formexercise = {
        id: null,
        ExerciseName: '',
        Date: '',
        Distance: '',
        Rest:'',
        Notes:'',
        Tag1: '',
        Tag2: '',
        Tag3: '',
        Tag4: '',
        Tag5: '',
        Tag6: '',
        Tag7: '',
        Tag8: '',
        Tag9: '',
        Tag10: '',
      }
    }
    onSubmit(form:NgForm){
      let data =form.value;
      this.afs.collection('addschedule').add(data);
      this.resetForm(form);
    }
  }
