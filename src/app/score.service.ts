import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ScoreService {

  constructor(private _http: Http) { }
  getUser(callback, username){
    this._http.get(`https://api.github.com/users/${username}`).subscribe(
      (response)=>{
        callback(response.json());
      },
      (err)=>{
        console.log(err);
      }
    );
  }
}