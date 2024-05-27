import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MarketComponentComponent } from './market-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CapilizePipe } from 'src/app/pipes/capilize.pipe';
import { AbbreviateNumberPipe } from 'src/app/pipes/abreviate-number.pipe';
import { NgxApexchartsModule } from 'ngx-apexcharts';



@NgModule({
	declarations: [MarketComponentComponent, CapilizePipe, AbbreviateNumberPipe],
	imports: [
		CommonModule,
		IonicModule,
		FormsModule,
		ReactiveFormsModule,
		NgxApexchartsModule
	],
	exports: [MarketComponentComponent]
})
export class MarketComponentModule { }
