import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
interface Post {
  Name: string;
 
}
interface PostId extends Post {
  id: string;


}

@Component({
  selector: 'app-addschedule',
  templateUrl: './addschedule.component.html',
  styleUrls: ['./addschedule.component.css']
})
export class AddscheduleComponent implements OnInit {
  Name: string;
  postsCol: AngularFirestoreCollection<Post>;
  posts: any;
  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;
  addPost() {
    this.afs.collection('posts').doc('my-custom-id').set({ 'Name': this.Name});
  }
  getPost(postId) {
    this.postDoc = this.afs.doc('posts/' + postId);
    this.post = this.postDoc.valueChanges();
  }
  deletePost(postId) {
    this.afs.doc('posts/' + postId).delete();
  }
  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.postsCol = this.afs.collection('posts', ref => ref.where('Name', '==', 'coursetro'));

    this.posts = this.postsCol.valueChanges();
    this.posts = this.postsCol.snapshotChanges()

      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, data };
        });
      });
  }
}
