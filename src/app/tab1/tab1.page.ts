import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServicesService } from '../services/login/login-services.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private router: Router,
    private loginService: LoginServicesService
  ) {}

  async logout(){
    try {
      await this.loginService.logout()
      this.router.navigate(['/login'])
    } catch (error) {
      throw error;
    }
  }

}
