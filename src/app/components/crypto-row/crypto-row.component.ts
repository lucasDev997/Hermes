import { Component, Input, OnInit } from '@angular/core';
import { IMarketData } from 'src/app/types/marketData.type';

@Component({
  selector: 'app-crypto-row',
  templateUrl: './crypto-row.component.html',
  styleUrls: ['./crypto-row.component.scss'],
})
export class CryptoRowComponent  implements OnInit {

  @Input() crypto: IMarketData;
  @Input() index: number;
  @Input() page: number;
  @Input() itemsPerPage: number;

  constructor() { }

  ngOnInit() {}

  isValuePositive(price: number):boolean{
		return price > 0;
	}


}
