import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponentComponent } from './news-component.component';



@NgModule({
  declarations: [NewsComponentComponent],
  imports: [
    CommonModule
  ],
  exports: [NewsComponentComponent]
})
export class NewsComponentModule { }
