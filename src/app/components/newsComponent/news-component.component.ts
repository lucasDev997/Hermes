import { Component, OnInit } from '@angular/core';
import { CryptoNewsService } from '../../services/newsService/news-service.service';
import { CryptoNewsItem } from 'src/app/types/news.type';

@Component({
  selector: 'app-news',
  templateUrl: './news-component.component.html',
  styleUrls: ['./news-component.component.scss']
})
export class NewsComponent implements OnInit {

  cryptoNews: CryptoNewsItem[] = [];

  constructor(private cryptoNewsService: CryptoNewsService) { }

  ngOnInit(): void {
    this.fetchCryptoNews();
  }

  fetchCryptoNews(): void {
    
    this.cryptoNewsService.getCryptoNews().subscribe((data) => {
      data.results.forEach((news:CryptoNewsItem) => {
        this.cryptoNews.push(news)
        console.log(news);
        
        
      })      
    })

    /* this.cryptoNewsService.getCryptoNews().subscribe(
      (news: any) => {
        this.cryptoNews = news.data;
      },
      (error) => {
        console.error('Error fetching crypto news', error);
      }
    ); */
  }
}
