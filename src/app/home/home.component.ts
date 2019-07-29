import { Component, OnInit, Input } from '@angular/core';
import { UserEntry } from './../user-entry';
import { Location } from './../Location'
import { UserentryService } from './../userentry.service'
import { cityCrimeObject } from './CityCrimeObject'
import { AbstractControl, Validators } from '@angular/forms';
import { AgmCoreModule } from '@agm/core'
import { cityEntry } from './cityEntry';
import { ValidCity } from '../ValidCity';
import { LoadChildren } from '@angular/router';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserentryService]
})



export class HomeComponent implements OnInit {

  usinputs: Array<UserEntry>;
  crimelocations: Array<Location>;
  tempcrimes: Array<Location>;
  public allvalidcities: Array<ValidCity>;
  public latitude = 38.9339;
  longitude = -77.1773;
  public mymap = new Map<string, cityCrimeObject>();
  validcity = true;
  cityattempt = new cityEntry("");

  constructor(private _userEntryService: UserentryService) { }
  
  ngOnInit() {
    this._userEntryService.getCities()
      .subscribe(resInputData => {
        this.allvalidcities = resInputData
        this.allvalidcities.forEach(element => {
          console.log(element.cityname)
          this.mymap.set(element.cityname, new cityCrimeObject(element.centerlat, element.centerlong, 0, 0, []))
        });        
      })
  };

  logMessage(input: string) {
    
    if (this.mymap.has(input)) {
      this.validcity = true
      if (this.mymap.get(input).crimedata.length == 0) {
        this._userEntryService.getInputs(this.deleteAfterComma(input))
        .subscribe(resInputData =>  {
          this.crimelocations = resInputData;
          this.mymap.get(input).crimedata = this.crimelocations;
          this.latitude = Number(this.mymap.get(input).centerlatitude)
          this.longitude = Number(this.mymap.get(input).centerlongitude)
          console.log("Not seen yet")
        })
      } else {
        this.crimelocations = this.mymap.get(input).crimedata
        this.latitude = Number(this.mymap.get(input).centerlatitude)
        this.longitude = Number(this.mymap.get(input).centerlongitude)
        console.log("Already seen")
      }
    } else {
      this.validcity = false;
    }
  }

  deleteAfterComma(input: String):String {
    var comma = input.indexOf(',');
    return input.substring(0, comma)
  }
  
  
}
