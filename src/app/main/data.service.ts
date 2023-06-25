import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) {}

  api: string = 'https://gist.githubusercontent.com/hosseinrmzz/efc2853bf4aa386266a4cce7fce572dd/raw/906e9b47e80f2c1746c161b2631e86bda5afb814/data.json'
  data!: any[]

  request(): Observable<any> {
    return this.http.get(this.api);
  }
}
