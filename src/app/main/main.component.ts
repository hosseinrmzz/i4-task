import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  users:any;  

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.request().subscribe(result => {
      this.users = result;
    })
  }

  generateTable(item: any) {
    const keys = Object.keys(item[1]);
    const dataSource = [item[1]];
  
    for (let i = 2; i < item.length; i++) {
      dataSource.push(item[i]);
    }
  
    return {
      keys,
      dataSource
    };
  }

}
