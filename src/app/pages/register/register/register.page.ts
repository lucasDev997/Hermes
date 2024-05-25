import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  public email:string = ''
  public password:string = ''
  public name:string = ''

  public errorMessage: any = ''

  constructor(
    private registerService: RegisterService,
    private router:Router
  ){ }

  async register(){
    try {
      await this.registerService.register(this.email, this.password, this.name);
      this.router.navigate(['/login'])
    } catch (error) {
      throw error
    }
  }

  async googleSignIn(){
    try {
      await this.registerService.googleSignIn(this.name)
      this.router.navigate(['/tabs/tab1/'])
    } catch (error) {
      console.error("Error during Google sign-in", error);
      
    }
  }

  navigateToLogin(){
    this.router.navigate(['/login'])
  }

  clearInputs(){
    this.email = ''
    this.password = ''
    this.name = ''
  }
}
