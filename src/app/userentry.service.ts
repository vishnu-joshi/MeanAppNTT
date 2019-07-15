import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { UserEntry } from './user-entry';

@Injectable({
  providedIn: 'root'
})
export class UserentryService {

  private _getUrl = "/api/userinputs";
  private _postUrl = "/api/userinput";
  constructor(private _http: Http) { }

  getInputs() {
      return this._http.get(this._getUrl)
        .pipe(map((response: Response) => response.json()));
  }

  addInput(input: UserEntry) {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this._http.post(this._postUrl, JSON.stringify(input), options)
      .pipe(map((response: Response) => response.json())); 
    }
}
