import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {MatSort, MatPaginator, MatTableDataSource} from '@angular/material';
import { CoachserviceService } from '../../shared/coachservice.service';
import { User } from '../../shared/user.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireUploadTask,AngularFireStorage } from 'angularfire2/storage';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import {FirebaseApp} from 'angularfire2/';
import { from } from 'rxjs';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';
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
 image:string;
 task: AngularFireUploadTask;
 percentage: Observable<number>;

 snapshot: Observable<any>;
 downloadURL: Observable<string>;
 isHovering: boolean;

  constructor(@Inject(FirebaseApp) firebaseApp: any,private service: CoachserviceService,  private fs: AngularFirestore,private stc:AngularFireStorage) { }
  toggleHover(event: boolean) {
    this.isHovering = event;
  }


  startUpload(event: FileList) {
    // The File object
    const file = event.item(0)

    // Client-side validation example
    if (file.type.split('/')[0] !== 'image') { 
      console.error('unsupported file type :( ')
      return;
    }

    // The storage path
    var file_name=new Date().getTime();
    const path = 'profile/' +file_name + file.name;
    // Totally optional metadata
    const customMetadata = { app: 'My AngularFire-powered PWA!' };
    const fileRef=this.stc.ref(path);

    // The main task
    this.task = this.stc.upload(path, file, { customMetadata })

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot   = this.task.snapshotChanges().pipe(
      // The file's download URL
      finalize(() => this.downloadURL = fileRef.getDownloadURL()),
      tap(snap => {
        console.log(snap)
        if (snap.bytesTransferred === snap.totalBytes) {
          // Update firestore on completion
          this.fs.collection('photos').add( { path, size: snap.totalBytes })
        }
      })
    )
  }
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  }
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
