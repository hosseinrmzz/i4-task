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
  displayedColumns: string[] = ['number', 'email', 'company'];
  activeTab = 'aithentication';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.request().subscribe(result => {
      this.users = result
    })
  }

  tabChanged(event: MatTabChangeEvent) {
    this.activeTab = event.tab.textLabel.toLowerCase();
  }
}
