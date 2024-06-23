import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoNewsService {

  private apiUrl = 'https://newsdata.io/api/1/latest?apikey=pub_451101bc19aebb61df3538a9f67d039813fdb';

  constructor(private http: HttpClient) { }

  getCryptoNews(): Observable<any> {

    return this.http.get<any>(this.apiUrl);
  }
}
