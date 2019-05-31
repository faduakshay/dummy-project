import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) { }

  // sign up with email and password
  signUp(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.router.navigate(['dashboard']);
      }).catch((error) => {
        window.alert(error);
      });
  }
  // sign In with email and password
  signIn(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.router.navigate(['dashboard']);
      }).catch((error) => {
        console.log(error);
        window.alert(error);
      });
  }
  // Sign out
  signOut() {
    return this.afAuth.auth.signOut()
      .then(() => {
        console.log('Sign out');
        this.router.navigate(['login']);
      });
    }

   // Reset Forggot password
   forgotPassword(passwordResetEmail) {
    return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
        .then(() => {
            window.alert('Password reset email sent, check your inbox.');
            this.router.navigate(['login']);
        }).catch((error) => {
            window.alert(error);
        });
}
  // sign In with Google account
  GoogleAuth() {
          return this.AuthLogin(new auth.GoogleAuthProvider());
        }
  AuthLogin(provider) {
          return this.afAuth.auth.signInWithPopup(provider)
            .then((result) => {
              this.ngZone.run(() => {
                this.router.navigate(['dashboard']);
              });
            }).catch((error) => {
              window.alert(error);
            });
        }
}
