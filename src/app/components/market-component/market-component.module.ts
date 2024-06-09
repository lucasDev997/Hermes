import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MarketComponentComponent } from './market-component.component';
import { FormsModule} from '@angular/forms';
import { CryptoRowModule } from '../crypto-row/crypto-row.module';



@NgModule({
    declarations: [MarketComponentComponent],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        CryptoRowModule
    ],
    exports: [MarketComponentComponent]
})
export class MarketComponentModule { }
