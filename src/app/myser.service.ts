import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable()
export class MyserService {

  constructor(private http:HttpClient) { }

  getNewsData()
  {
    const url="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=74da004083014362a442eb198a6d2fde"
    return this.http.get(url);
  }
}
