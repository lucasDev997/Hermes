import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MarketComponentComponent } from './market-component.component';
import { FormsModule} from '@angular/forms';
import { CapilizePipe } from 'src/app/pipes/capilize.pipe';
import { AbbreviateNumberPipe } from 'src/app/pipes/abreviate-number.pipe';
import { PorcentageValuePipe } from 'src/app/pipes/porcentage-value.pipe';



@NgModule({
    declarations: [MarketComponentComponent, CapilizePipe, AbbreviateNumberPipe, PorcentageValuePipe],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule
    ],
    exports: [MarketComponentComponent]
})
export class MarketComponentModule { }
