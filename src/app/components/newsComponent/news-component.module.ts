import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NewsComponent } from './news-component.component';



@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[NewsComponent]
})
export class NewsComponentModule { }
