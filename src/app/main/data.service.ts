import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) {}

  api: string = 'https://gist.githubusercontent.com/hosseinrmzz/6913bff5320e106e16d1337fdc662da0/raw/86b926c2a50444520419404e74991f432dd6d3e6/data.json'
  
  request() {
    return this.http.get(this.api)
  }
}
