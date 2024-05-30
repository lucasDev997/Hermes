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
	public chartData: number[] = [];
	public newChartData: number[][] = [];

	constructor(private getMarketDataService: GetMarketDataServiceService) {}

	ngOnInit() {
		this.getMarketData();
	}

	getMarketData() {
		const idsArray = this.searchQuery ? this.searchQuery.split(',').map(id => id.trim()) : undefined;
		this.getMarketDataService.getMarketData('usd', this.page, idsArray, this.order, this.sparkline_7_days).subscribe(
			(data: IMarketData[]) => {
				this.marketData = data;
				console.log(this.marketData);
			},
			(error: Error) => {
				console.error('Error fetching market data', error);
			}
		);
	}

	isValuePositive(price: number):boolean{
		return price > 0 ? true : false
	}

	nextPage(){
		this.page++
		this.getMarketData()
	}
	previousPage(){
		this.page--
		this.getMarketData()
	}
}
