import { Component, OnInit } from '@angular/core';
import { GetMarketDataServiceService } from 'src/app/services/getMarketDataService/get-market-data-service.service';

@Component({
  selector: 'app-market-component',
  templateUrl: './market-component.component.html',
  styleUrls: ['./market-component.component.scss'],
})
export class MarketComponentComponent implements OnInit {
  public ids: Array<string> = [];
  public order: string = '';
  public sparkline_7_days: boolean = false;
  public page: string = '1'
  public searchQuery: string = '';
  public marketData: any[] = [];

  constructor(private getMarketDataService: GetMarketDataServiceService) {}

  ngOnInit() {
    this.getMarketData();
  }

  getMarketData() {
    const idsArray = this.searchQuery ? this.searchQuery.split(',').map(id => id.trim()) : undefined;
    this.getMarketDataService.getMarketData('usd', 1, idsArray, this.order, this.sparkline_7_days).subscribe(
      (data: any) => {
        this.marketData = data;
        console.log(this.marketData);
      },
      (error: any) => {
        console.error('Error fetching market data', error);
      }
    );
  }
}
