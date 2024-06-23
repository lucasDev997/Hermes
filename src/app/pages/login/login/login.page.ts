import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServicesService } from 'src/app/services/login/login-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{

  constructor(
    private router: Router,
    private loginService: LoginServicesService
  ) { }


  public email: string = ''
  public password: string = ''

  async login(){
    try {
      await this.loginService.login(this.email, this.password)
      this.router.navigate(['tab1'])
    } catch (error) {
      throw error;
    }
  }
  
  navigateToRecoverPassword(){
    this.router.navigate(['/recover-password'])
  }
  
  navigateToRegister(){
    this.router.navigate(['/register'])
  }
  


}
