import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FeedItem } from '../types/news.type';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(private httpClient: HttpClient) { }

  getAllNews():Observable<FeedItem>{
    return this.httpClient.get<FeedItem>(`https://www.alphavantage.co/query`, {
      params: {
        // Parametros Obrigatórios de Query
        'function': 'NEWS_SENTIMENT',
        'apikey': '66PBQ6EBPXPGDYIO',
        // Parametros Opcionais de Query
        'limit': '1'
      }
    })
  }
}
