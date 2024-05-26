import { Component, OnInit } from '@angular/core';
import { ChangePasswordServiceService } from 'src/app/services/change-password-service.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.page.html',
  styleUrls: ['./recover-password.page.scss'],
})
export class RecoverPasswordPage {

  constructor(private changePasswordService: ChangePasswordServiceService) { }
  public email: string = ''

  async sendConfirmationCode(){
    try {
      await this.changePasswordService.sendPasswordChangeCodeToEmail(this.email)
    } catch (error) {
      throw error;
    }
  }
}
