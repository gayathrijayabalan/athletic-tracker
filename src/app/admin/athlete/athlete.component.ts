import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, NgForm} from '@angular/forms';
import { CoachserviceService } from '../../shared/coachservice.service';
import {AngularFirestore} from 'angularfire2/firestore'
import  {Observable}  from  'rxjs';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-athlete',
  templateUrl: './athlete.component.html',
  styleUrls: ['./athlete.component.css']
})
export class AthleteComponent implements OnInit {
  downloadURL : Observable<string | null>;
  profilepicRef: any;
  uid;
  property:any;
  name: any;
  email: any;
  phone: any;
  profile: any;
  brokerage: any;
  userid:any;
  phonenumber: number;
  url:any;
  uploads: any[];
  allPercentage: Observable<any>;
  files: Observable<any>;
  showMsg: boolean = false;
  task: AngularFireUploadTask;

  // Progress monitoring
  percentage: Observable<number>;

  snapshot: Observable<any>;

  // Download URL
  
  // State for dropzone CSS toggling
  isHovering: boolean;

  constructor(public service:CoachserviceService,private afs:AngularFirestore , private storage: AngularFireStorage) { }
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

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata })

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot   = this.task.snapshotChanges().pipe(
      // The file's download URL
      // finalize(() => this.downloadURL = fileRef.getDownloadURL()),
      tap(snap => {
        console.log(snap)
        if (snap.bytesTransferred === snap.totalBytes) {
          // Update firestore on completion
          this.afs.collection('photos').add( { path, size: snap.totalBytes })
        }
      })
    )
  }
  ngOnInit() {
    this.resetForm();
  }
 
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id:'',
      fullName:'',
      profile:'',
      designation:'',
      email:'',
      phone:'',
      dob:'',
      class:'',
      age:'',
      yearofadmin:'',
      bloodgroup:'',
      height:'',
      weight:'',
    
    }
  }
 
//  onSubmit(form:NgForm,name:any){
//    let data=form.value;
//    this.afs.doc(user).set(data);
//    this.resetForm(form);
//    console.log(data);
//  }
 onSubmit(form:NgForm){
  let data =form.value;
  this.afs.collection('user').add(data);
  this.resetForm(form);
  this.showMsg=true;

}

 
}
