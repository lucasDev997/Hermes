import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from 'src/app/services/news-service.service';
import { FeedItem } from 'src/app/types/news.type';

@Component({
  selector: 'app-news-component',
  templateUrl: './news-component.component.html',
  styleUrls: ['./news-component.component.scss'],
})
export class NewsComponentComponent  implements OnInit {
  constructor(private newsService: NewsServiceService) { }

  public newsArray: FeedItem[] = []

  ngOnInit() {
    this.getNews()
    console.log(this.newsArray);
    
  }


  getNews(){
    return this.newsService.getAllNews().subscribe((data) => {
      this.newsArray.push(data)

    })
  }

}
