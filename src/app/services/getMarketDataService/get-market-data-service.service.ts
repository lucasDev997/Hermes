import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMarketData } from 'src/app/types/marketData.type';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})

export class GetMarketDataServiceService {
	private baseUrl = 'https://api.coingecko.com/api/v3/coins/markets?';

	constructor(private httpClient: HttpClient) { }

	getMarketData(vs_currency:string, page:number, ids?: Array<string>, order?:string, sparkline_7_days?:boolean):Observable<IMarketData[]>{
		const params: any = {
			vs_currency: vs_currency,
			page: page.toString(),
		};

		if (ids) {
			params.ids = ids.join(',');
		}
		if (order) {
			params.order = order;
		}
		if (sparkline_7_days !== undefined) {
			params.sparkline = sparkline_7_days ? 'true' : 'false';
		}

		return this.httpClient.get<IMarketData[]>(this.baseUrl, { params: params, headers: {
			'x-cg-demo-api-key': environment.coinGeckoApiKey
		} });
	}
}
