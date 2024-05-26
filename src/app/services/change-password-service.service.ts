import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordServiceService {

  constructor(private afAuth: AngularFireAuth) {}

  // Manda o Código de confirmação

  async sendPasswordChangeCodeToEmail(email: string){
    try {
      await this.afAuth.sendPasswordResetEmail(email)
    } catch (error) {
      throw error;
    }
  }
}
