import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app'; // This ensures we get the right types from firebase

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) {}

  async register(email: string, password: string, name: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      if (result.user) {
        await this.setUserData(result.user, name);
      } else {
        throw new Error('User registration failed');
      }
      return result;
    } catch (error) {
      console.error("Error registering user", error);
      throw error;
    }
  }

  private setUserData(user: firebase.User, name: string) {
    const userRef = this.firestore.collection('users').doc(user.uid);
    const userData = {
      uid: user.uid,
      email: user.email,
      name: name
    };
    return userRef.set(userData, { merge: true });
  }
}
