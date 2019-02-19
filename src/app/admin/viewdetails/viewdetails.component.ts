import { Component, OnInit } from '@angular/core';
import { CoachserviceService } from '../../shared/coachservice.service';
import { Studentbyathlete } from '../../shared/user.model';
import {  AngularFirestore } from 'angularfire2/firestore';


@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {
list:Studentbyathlete[];
  constructor(private service:CoachserviceService,private afs:AngularFirestore) {

   }

  ngOnInit() {
    this.service.getStudentbyathlete().subscribe(actionArray=>{
    this.list=actionArray.map(item=>{
      return{
        id:item.payload.doc.id,
        ...item.payload.doc.data()
      } as Studentbyathlete;
    })
    });
  }
}