import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoRowComponent } from './crypto-row.component';
import { IonicModule } from '@ionic/angular';
import { AbbreviateNumberPipe } from 'src/app/pipes/abreviate-number.pipe';
import { CapilizePipe } from 'src/app/pipes/capilize.pipe';
import { PorcentageValuePipe } from 'src/app/pipes/porcentage-value.pipe';



@NgModule({
  declarations: [CryptoRowComponent, AbbreviateNumberPipe, PorcentageValuePipe, CapilizePipe],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [CryptoRowComponent]
})
export class CryptoRowModule { }
