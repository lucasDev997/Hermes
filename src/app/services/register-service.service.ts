import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) {
    // Handle the redirect result
    this.afAuth.getRedirectResult().then(result => {
      if (result.user) {
        this.setUserData(result.user, 'Google User');
      }
    }).catch(error => {
      console.error("Error handling redirect result", error);
    });
  }

  async register(email: string, password: string, name: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      if (!result.user) {
        throw new Error("There has been an error with the registration");
      }
      await this.setUserData(result.user, name);
      return result;
    } catch (error: any) {
      this.handleError(error);
      throw error;
    }
  }

  async googleSignIn() {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await this.afAuth.signInWithRedirect(provider);
    } catch (error) {
      console.error("Error during Google sign-in", error);
      this.handleError(error);
      throw error;
    }
  }

  private setUserData(user: firebase.User, name: string) {
    const userRef = this.firestore.collection('users').doc(user.uid);
    const userData = {
      uid: user.uid,
      email: user.email,
      name: name || 'Google User' // Use a default name if not provided
    };
    return userRef.set(userData, { merge: true });
  }

  private handleError(error: any) {
    let errorMessage = 'An unknown error occurred!';
    if (error.code) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'The email address is already in use by another account.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'The email address is not valid.';
          break;
        case 'auth/operation-not-allowed':
          errorMessage = 'Email/password accounts are not enabled.';
          break;
        case 'auth/weak-password':
          errorMessage = 'The password is too weak.';
          break;
        case 'auth/user-disabled':
          errorMessage = 'The user account has been disabled by an administrator.';
          break;
        case 'auth/user-not-found':
          errorMessage = 'There is no user corresponding to the given email.';
          break;
        case 'auth/wrong-password':
          errorMessage = 'The password is invalid for the given email.';
          break;
        default:
          errorMessage = 'An unknown error occurred!';
          break;
      }
    }
    console.error(errorMessage);
  }
}
