import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app'

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {

  constructor(private afAuth: AngularFireAuth) { }

  public async login(email: string, password: string){
    try {
      return await this.afAuth.signInWithEmailAndPassword(email, password)
    } catch (error) {
      console.error("Error loggig in", error);
      throw error
    }
  }

  public async loginWithGoogle(){
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await this.afAuth.signInWithPopup(provider)
      return result;
    } catch (error) {
      throw error;
    }
  }

  public async logout(){
    try {
      await this.afAuth.signOut()
    } catch (error) {
      throw error
    }
  }


}
