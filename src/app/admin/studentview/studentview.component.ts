import { Component, OnInit } from '@angular/core';
import { CoachserviceService } from '../../shared/coachservice.service';
import { Addschedule, Workout } from '../../shared/user.model';
import {  AngularFirestore,} from 'angularfire2/firestore';
import { Router, Params } from '@angular/router';
import {NavigationExtras} from "@angular/router";
@Component({
  selector: 'app-studentview',
  templateUrl: './studentview.component.html',
  styleUrls: ['./studentview.component.css']
})
export class StudentviewComponent implements OnInit {
  ageValue: number = 0;
  searchValue: string = "";
  items: Array<any>;
  age_filtered_items: Array<any>;
  name_filtered_items: Array<any>;  
  newTrustFormVisible: false;
  exercise:any;
  list:Addschedule[];
  list1:Workout[];
  object:any;
  constructor(private service:CoachserviceService,private afs:AngularFirestore, private router: Router) { }

  ngOnInit() {
    this.getData();
    this.service.getAddschedule().subscribe(actionArray=>{
      this.list=actionArray.map(item=>{
        return{
          id:item.payload.doc.id,
          ...item.payload.doc.data()

        } as Addschedule;
      })
    });
    
    this.service.getAddschedule().subscribe(actionArray=>{
      this.list1=actionArray.map(item=>{
        return{
          id:item.payload.doc.id,
          ...item.payload.doc.data()

        } as Workout;
      })
    });
  }
 
  getData(){
    this.service.getUsers()
    .subscribe(result => {
      this.items = result;
      this.age_filtered_items = result;
      this.name_filtered_items = result;
    })
  }
  
 
  viewDetails(ExerciseName:any){
    let navigationExtras: NavigationExtras = {
      queryParams: {
         ExerciseName
      }
  };
  this.router.navigate(['edit'], navigationExtras);

  }
  onEdit(work:Addschedule){
    this.service.formexercise=Object.assign({},work);
  }
}