import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DevComponentComponent } from './dev-component.component';



@NgModule({
  declarations: [DevComponentComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [DevComponentComponent]
})
export class DevComponentModule { }
