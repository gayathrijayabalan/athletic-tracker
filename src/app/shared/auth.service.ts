import { Injectable } from '@angular/core';
import {User} from './user';
import { Router } from '@angular/router'; 
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore'
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';import { AngularFireAuth, } from 'angularfire2/auth';
import{take} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users$ : Observable<User>;
  authState = null;
  error: any = null;
  uid$;
  user;
  property:any;
  phonenumber1:number;
  usersdocument:any;
  data: Observable<any[]>;
  data$:any;
  constructor(private afAuth : AngularFireAuth, private afs : AngularFirestore, private router : Router
  ) {
    console.log("retgert"+this.uid$);
      this.afAuth.authState.subscribe((auth) => {
        if (auth) {
          console.log('logged in');
          this.authState = auth
      
          
          const uida = this.afAuth.auth.currentUser.uid;
          if (uida != null || uida != undefined)
          {
             console.log(uida +"is htns");
           this.getuserdata(  )
          }
         
         
        } else {
          this.router.navigate(['/'])
          console.log('not logged in');       
        }
          
      });
    this.users$ = this.afAuth.authState.pipe(
      switchMap(
        user => {
                    if (user){
                      return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
                    }
                    else
                    {
                      return of(null)
                    }
                 }
           )
           )

        
  }
  
  //
  

  get profile():any{

    return(this.authState);
  }
  //
    get currentUserId(): string {
        return (this.authState !== null) ? this.authState.uid : 'no'
    }

    get currentUser(): any {
        return (this.authState !== null) ? this.authState : null;
    }
    get displayName():string{
      return (this.authState !== null) ? this.authState['displayName'] : ""
    }

    get email():string{
      return (this.authState !== null) ? this.authState['email'] : ""
    }
    
   
    get isUserEmailLoggedIn(): boolean {
        if (this.authState !== null)  {
            return true
        } else {
            return false
        }
    }
    registerclient(userd){
      return this.afAuth.auth.createUserWithEmailAndPassword(userd.email, userd.phone)
      .then(
        (user)=>{
          this.authState = user 
          this.getinfo(userd)
          this.updateuserdata(userd, this.afAuth.auth.currentUser.uid ).then(()=>{console.log("updated")
            this.afAuth.auth.sendPasswordResetEmail(this.afAuth.auth.currentUser.email).then(() => this.router.navigate(['/thanks'])).catch((e) => {
              console.log(e.message);
              return e
            })}).catch((e)=>console.log("not updated"))
            
        }
      ).catch(error => {
        
        throw error
      })
    }
    private updateuserdata(user, uid) {

        const userRef$: AngularFirestoreDocument<any> = this.afs.doc<User>(`users/${uid}`);
        const userdata: User = {
            uid: uid,
            displayName: user.name,
            brokerage: user.brokerage,
            email: user.email,
            phonenumber: user.phone,
            // url:user.url,
            roles: {
                user: true
            }
        }

        return userRef$.set(userdata, { merge: true })
    }

  
  login(email: string, pass: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, pass).then(
      (user) => {
      
        this.authState = user
        // this.getinfo()
        
        this.router.navigate(['/main/home'])
       
      }
    ).catch(error => {

      throw error
    })
  }

  getinfo(userd) {
    return this.afAuth.auth.onAuthStateChanged(function (user) {
      if (user) {
        user.updateProfile({
          displayName : userd.name,
          photoURL: "https://firebasestorage.googleapis.com/v0/b/agent-sync-sonderworks.appspot.com/o/userprofile%2Fuser.jpg?alt=media&token=d3b47a22-a861-4c7a-9104-bef874ea39bf"
        })
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;

        var providerData = user.providerData;
        var phone = user.phoneNumber;
        var uids = user.uid;
        
        console.log(uids)
       
        
      }
    })
  }
  forgetemail(email)
  {
    return this.afAuth.auth.sendPasswordResetEmail(email)
  }
  getinfox() {
    return this.afAuth.auth.onAuthStateChanged(function (user) {
     
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;

        var providerData = user.providerData;
        var phone = user.phoneNumber;
        var uids = user.uid;

        console.log(uids+displayName+photoURL+email)


      
    })
  }
 getuser()
 {
   const uid = this.afAuth.auth.currentUser.uid;
 if (uid != null || uid != undefined) {
     console.log("uidsssdsdsd is" + uid);
     const userRef$ = this.afs.collection('users').doc(uid);
     userRef$.ref.get().then(function (doc) {
     
         return doc.data()
                      
   })}
 }

 //

  getuserdata():any {
    
    const uid = this.afAuth.auth.currentUser.uid;
   
    console.log("uidss is" + uid);
    const userRef$ = this.afs.collection('users').doc(uid);
    // this.afs.doc<User>(`users/${uid}`);
   var a = userRef$.ref.get().then(function (doc) {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        const phonenumber = doc.data().phonenumber;
        console.log("a is"+phonenumber);
        return doc.data()
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }).catch(function (error) {
      console.log("Error getting document:", error);
    });
    a.then(data=>{this.data$=data})
    console.log("from user document")
    console.log(this.data$)
  }


  get profiledata() {
   
    const givenemail = this.email;

    const data = this.afs.collection(`users`, ref => ref.where('email', '==', givenemail)).valueChanges().pipe(take(1)).subscribe(res=>{return res})
    console.log(data)
    return this.data
  }
 
  signOut(): void {
    this.afAuth.auth.signOut().then(() => this.router.navigate(['/']))
      
    }
//order query

clientqueryorderlen(){

  const uid = this.currentUserId;
  console.log(uid);
  var length;
  this.data=this.afs.collection(`users/${uid}/orders/`, ref => ref.where('status', '==', 'new')).valueChanges();
  console.log(this.data);
  return this.data;
 
}

//




























 
  // login12(email:string,pass:string)
  // {
  //   return this.afAuth.auth.signInWithEmailAndPassword(email,pass).then(
  //     (user)=>{
  //         const uid = this.afAuth.auth.currentUser.uid;
  //       this.authState = user
  //       this.getinfo()
        
  //         this.router.navigate(['/main'])
         
  //     }
  //    ).catch((error)=> error)
  // }
    // currentUserId(): string {
    //     const uid = this.afAuth.auth.currentUser.uid;
        
    //     return (this.authState !== null) ? this.authState.uid : this.getuserdata(uid)
    // }
    

 
    // determines the user has matching role
    private checkAuthorization(user:User, allowedRoles: string[]):boolean{
      if (!user) return false
      for(const role of allowedRoles){
        if(user.roles[role])
        {
          return true
        }
      }
      return false

    }
  canCreateOrder(user: User):boolean{
    const allowed = ['admin', 'user']
    return this.checkAuthorization(user, allowed)
  }
  canReadOrder(user: User): boolean {
    const allowed = ['admin', 'agent', 'user']
    return this.checkAuthorization(user, allowed)
  }
  canEditOrder(user: User):boolean {
    const allowed = ['admin', 'agent', 'user']
    return this.checkAuthorization(user, allowed)
  }
  canDeleteOrder(user: User): boolean {
    const allowed = ['admin', 'agent']
    return this.checkAuthorization(user, allowed)
  }
}