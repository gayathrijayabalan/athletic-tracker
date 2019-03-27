import { Component, OnInit, Input} from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { CoachserviceService } from '../../shared/coachservice.service';
import { NgForm,NgModel } from '@angular/forms';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { User } from '../../shared/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
  profile:any;
  list:User[];
  user:any;
  item:any;
  exercisen:any;
  showMsg: boolean = false;
  // athlete1:any[];
  // athletee:any[];
  constructor(public service: CoachserviceService,private router: Router,private afs :AngularFirestore, private route: ActivatedRoute) { }

 
  ngOnInit() {
this.route.queryParams.subscribe(params => {
    this.exercisen=params;
    console.log(this.exercisen)
});
    //     this.resetForm();
    // this.service.getAddschedule().subscribe(actionArrray=>{
    //   this.list=actionArrray.map(item=>{
    //     return {
          
    //       id:item.payload.doc.id,
    //       ...item.payload.doc.data()}as User;
    //   })
    // });
   
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
    console.log(data+"acfdd");
    this.afs.collection('addschedule').add(data);
    this.resetForm(form);
    this.showMsg=true;
  }
  delete(){
    this.service.deleteUser(this.item.id)
    .then(
      res => {
        this.router.navigate(['/studentview'])
      },
      err => {
        console.log(err);
      }
    )
  }

  cancel(){
    this.router.navigate(['/studentview']);
  }

  }
