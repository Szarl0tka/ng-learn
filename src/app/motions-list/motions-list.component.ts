import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-motions-list',
  templateUrl: './motions-list.component.html',
  styleUrls: ['./motions-list.component.scss']
})
export class MotionsListComponent implements OnInit {

  motions: any;

 

  constructor(
    private http : HttpClient) { }

  ngOnInit(): void {
    this.getMotions()
  }

  getMotions(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe(
        motions => {
          this.motions = motions;
        });
  }

}
