import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { CoachserviceService } from '../../shared/coachservice.service';
import { NgForm } from '@angular/forms';

import { User } from '../../shared/user.model';

@Component({
  selector: 'app-addschedule',
  templateUrl: './addschedule.component.html',
  styleUrls: ['./addschedule.component.css']
})
  export class AddscheduleComponent implements OnInit {
profile:any;
list:User[];

dropdownList = [];
selectedItems = [];
dropdownSettings = {};
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
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true
    };
  
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
        athletename1:'',
        athletename2:'',
        Athlete1:'',
      }
    }
    onSubmit(form:NgForm){
      let data =form.value;
      this.afs.collection('addschedule').add(data);
      this.resetForm(form);
    }
    onItemSelect(item: any) {
      console.log(item);
    }
    onSelectAll(items: any) {
      console.log(items);
    }
  }