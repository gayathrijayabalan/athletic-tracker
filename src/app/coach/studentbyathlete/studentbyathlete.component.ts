import { Component, OnInit } from '@angular/core';
import { CoachserviceService } from '../../shared/coachservice.service';
import { Addschedule } from '../../shared/user.model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
@Component({
  selector: 'app-studentbyathlete',
  templateUrl: './studentbyathlete.component.html',
  styleUrls: ['./studentbyathlete.component.css']
})


// export class StudentbyathleteComponent {
//   selectedDay: string = '';

//   //event handler for the select element's change event
//   selectChangeHandler (event: any) {
//     //update the ui
//     this.selectedDay = event.target.value;
//   }
// }
export class StudentbyathleteComponent implements OnInit {
  list:Addschedule[];
  profile:any;
  det:any;
  rel1:any;
  tut:any;
  constructor(private service:CoachserviceService,private afs:AngularFirestore) { }

  ngOnInit() {
    this.service.getAddschedule().subscribe(actionArray=>{
      this.list=actionArray.map(item=>{
        return{
          id:item.payload.doc.id,
          ...item.payload.doc.data()

        } as Addschedule;
      })
    });
  
    
  }

//   onEdit(exercise:Addschedule){
//     this.service.formexercise=Object.assign({},exercise);
// }
// onDelete(id:string){
//   if(confirm("are you to delete this record")){
//     this.afs.doc('Addschedule/'+id).delete();
  
//   }
// }
showStudent(eve){
  const idVal = eve.target.value;
    console.log(idVal);
  this.profile = this.service.getProfile(idVal);
  console.log(this.profile+"fafafda");
}
studentdata(rel2){
  this.rel1="28-02-2019";
  var myDate:any="28-02-2019";
  let time = new Date("28-02-2019");
  //  let tut=time.getTime();
  var rec ="Areobic";   
  myDate=myDate.split("-");
  var newDate=myDate[1]+"/"+myDate[0]+"/"+myDate[2];
  var  test=new Date(newDate).getTime();
  var test1='Timestamp(seconds=1551292200, nanoseconds=0)';
  console.log("datee"+test1);
  this.profile=this.service.g(rec).then(function(querySnapshot) {
   console.log("querySnapshot"+querySnapshot.size);
    for(var i=1;i<querySnapshot.size;i++)
    {
    console.log("i"+i)
    }
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
         console.log("querySnapshot"+querySnapshot);
        console.log(doc.id, " => ", doc.data());
    });
}) 
.catch(function(error) {
  console.log("Error getting documents: ", error);
});

    
  console.log(this.profile+"sindhu");
}
}
