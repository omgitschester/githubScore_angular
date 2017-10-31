import { Component, OnInit } from '@angular/core';
import { ScoreService } from './../score.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  list: object = {};

  username = {user: '' };

  constructor(private _ScoreService: ScoreService) { }

  ngOnInit() {
  }
getUser(){
  this._ScoreService.getUser(
    (data) => {this.list = data
    console.log(this.list)
  },
  this.username.user
  );
}

}
