import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  public email: string = '';
  public password: string = '';
  public name: string = '';
  public errorMessage: any = '';

  constructor(
    private registerService: RegisterService,
    private router: Router
  ) { }

  async register() {
    try {
      await this.registerService.register(this.email, this.password, this.name);
      this.router.navigate(['/login']);
    } catch (error) {
      this.handleError(error);
    }
  }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  clearInputs() {
    this.email = '';
    this.password = '';
    this.name = '';
  }

  private handleError(error: any) {
    this.errorMessage = 'An error occurred!';
    if (error.code) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          this.errorMessage = 'The email address is already in use by another account.';
          break;
        case 'auth/invalid-email':
          this.errorMessage = 'The email address is not valid.';
          break;
        case 'auth/operation-not-allowed':
          this.errorMessage = 'Email/password accounts are not enabled.';
          break;
        case 'auth/weak-password':
          this.errorMessage = 'The password is too weak.';
          break;
        case 'auth/user-disabled':
          this.errorMessage = 'The user account has been disabled by an administrator.';
          break;
        case 'auth/user-not-found':
          this.errorMessage = 'There is no user corresponding to the given email.';
          break;
        case 'auth/wrong-password':
          this.errorMessage = 'The password is invalid for the given email.';
          break;
        default:
          this.errorMessage = 'An unknown error occurred!';
          break;
      }
    }
    console.error(this.errorMessage);
  }
}
