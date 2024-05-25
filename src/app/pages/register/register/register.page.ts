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

  constructor(
    private registerService: RegisterService,
    private router:Router
  ){ }

  async register(){
    try {
      await this.registerService.register(this.email, this.password, this.name);
      this.router.navigate(['/login'])
    } catch (error) {
      console.error("Error registering user", error);
      
    }
  }

  navigateToLogin(){
    this.router.navigate(['/login'])
  }

}
