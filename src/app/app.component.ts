import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}

  keyword = '';

  send(keyword) {
    console.log('Sending!');
    this.keyword = keyword;
  }

  ngOnInit() {}
}
