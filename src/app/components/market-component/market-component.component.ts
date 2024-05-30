import { Component, OnInit } from '@angular/core';
import { GetMarketDataServiceService } from 'src/app/services/getMarketDataService/get-market-data-service.service';
import { IMarketData } from 'src/app/types/marketData.type';

@Component({
  selector: 'app-market-component',
  templateUrl: './market-component.component.html',
  styleUrls: ['./market-component.component.scss'],
})
export class MarketComponentComponent implements OnInit {
  public ids: Array<string> = [];
  public order: string = '';
  public sparkline_7_days: boolean = true;
  public page: number = 1;
  public searchQuery: string = '';
  public marketData: Array<IMarketData> = [];
  public paginatedData: Array<IMarketData> = [];
  public itemsPerPage: number = 10;

  constructor(private getMarketDataService: GetMarketDataServiceService) {}

  ngOnInit() {
    this.fetchAllMarketData();
  }

  fetchAllMarketData() {
    const idsArray = this.searchQuery ? this.searchQuery.split(',').map(id => id.trim()) : undefined;
    this.getMarketDataService.getMarketData('usd', this.page, idsArray, this.order, this.sparkline_7_days).subscribe(
      (data: IMarketData[]) => {
        this.marketData = data;
        this.updatePaginatedData();
        console.log(this.marketData);
      },
      (error: Error) => {
        console.error('Error fetching market data', error);
      }
    );
  }

  updatePaginatedData() {
    const startIndex = (this.page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedData = this.marketData.slice(startIndex, endIndex);
  }

  nextPage() {
    if ((this.page * this.itemsPerPage) < this.marketData.length) {
      this.page++;
      this.updatePaginatedData();
    }
  }

  previousPage() {
    if (this.page > 1) {
      this.page--;
      this.updatePaginatedData();
    }
  }
}
