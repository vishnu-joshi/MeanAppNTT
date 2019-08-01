import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/toPromise'
import { UserEntry } from './user-entry';
import { Location } from './Location';
import { Observable } from 'rxjs';
import { ValidCity } from './ValidCity'

@Injectable({
  providedIn: 'root'
})
export class UserentryService {

  private _getUrl = "/api/userinputs";
  private _postUrl = "/api/newcityreq";
  private _getCityUrl = "/api/supportedcities"
  private _getLocationCoordinates = "http://www.mapquestapi.com/geocoding/v1/address?key=cDyNPtcGDDzgqAc4mihhJtABeCtYUqlG&location="
  constructor(private _http: Http) { }

  getInputs(input: String):Observable<Location[]> {
      return this._http.get(this._getUrl + "/" + input)
        .pipe(map((response: Response) => response.json()));
  }

  getCities():Observable<ValidCity[]> {
      return this._http.get(this._getCityUrl)
        .pipe(map((response: Response) => response.json()));
  }

  getSpecifiedLocation(location: string) {
    return this._http.get(this._getLocationCoordinates + location)
    .pipe(map((response: Response) => response.json()));
  }

  addInput(input: UserEntry) {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this._http.post(this._postUrl, JSON.stringify(input), options)
      .pipe(map((response: Response) => response.json())); 
    }
}
