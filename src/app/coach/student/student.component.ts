import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, MatPaginator, MatTableDataSource} from '@angular/material';
import { CoachserviceService } from '../../shared/coachservice.service';
import { User } from '../../shared/user.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  // displayedColumns: string[] = ['sno', 'name', 'phonenumber', 'email','button'];
  list: User[];
  us: any;
 stu: any;
  constructor(private service: CoachserviceService,  private fs: AngularFirestore) { }


  ngOnInit() {
    this.service.getUser().subscribe(actionArrray => {
      this.list = actionArrray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()}as User;
      });
    });
}
  student(a){
    console.log(a);
  var docRef$ = this.fs.collection<User>('user').doc(a);

   this.stu = docRef$.ref.get().then(function (doc) {
    if (doc.exists) {
      console.log(" Document data:" , doc.data());
      return doc.data();
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch(function (error) {
    console.log("Error getting document:", error);
  });
  }
}
