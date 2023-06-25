import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) {}

  api: string = 'https://gist.githubusercontent.com/hosseinrmzz/016f86c65a3ac14d6520984829641078/raw/9ab1d46352883f261f1507a8ad4cca43b00d086b/test.json'
  data!: any[]

  request(): Observable<any> {
    return this.http.get(this.api);
  }
}
