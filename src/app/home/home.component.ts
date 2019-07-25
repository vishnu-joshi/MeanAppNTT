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
  allvalidcities: Array<ValidCity>;
  latitude = 38.9339;
  longitude = -77.1773;
  mymap = new Map<string, cityCrimeObject>();
  cityattempt = new cityEntry("");
  validcity = true;
  firstload = true;
  
  

  constructor(private _userEntryService: UserentryService) { }
 
  
  ngOnInit() {
      
      this._userEntryService.getCities()
        .subscribe(resInputData => {
          this.allvalidcities = resInputData
          this.allvalidcities.forEach(element => {
            console.log(element.cityname)
            this.mymap.set(element.cityname, new cityCrimeObject(element.centerlat, element.centerlong))
          });
          
        })
      
      
      /*
      this._userEntryService.getInputs()
        .subscribe(resInputData => this.crimelocations = resInputData);
        */
  };

  logMessage(input: string) {
    
    if (this.mymap.has(input)) {
      this.validcity = true
      this._userEntryService.getInputs()
      .subscribe(resInputData =>  {
        this.crimelocations = resInputData;
        this.latitude = Number(this.mymap.get(input).centerlatitude)
        this.longitude = Number(this.mymap.get(input).centerlongitude)
      })
    } else {
      this.validcity = false;
    }
  }

  validCityValidator(control: AbstractControl): {[key: string]: any} | null {
    return (this.mymap.has(control.value)) ? { 'forbiddenCity' : { value: control.value }} : null;
  }
  
}
