import { Component, OnInit, Input } from '@angular/core';
import { UserEntry } from './../user-entry';
import { Location } from './../Location'
import { UserentryService } from './../userentry.service'
import { cityCrimeObject } from './CityCrimeObject'
import { AbstractControl, Validators } from '@angular/forms';
import { AgmCoreModule } from '@agm/core'
import { cityEntry } from './cityEntry';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserentryService]
})



export class HomeComponent implements OnInit {

  usinputs: Array<UserEntry>;
  crimelocations: Array<Location>;
  latitude = 33.9806;
  longitude = -117.3755;
  mymap = new Map<string, cityCrimeObject>();
  cityattempt = new cityEntry("");
  validcity = true;
  
  

  constructor(private _userEntryService: UserentryService) { }
 
  
  ngOnInit() {
      
      this._userEntryService.getInputs()
        .subscribe(resInputData => this.crimelocations = resInputData);
      console.log("this occurred");
      this.mymap.set("Riverside, CA", new cityCrimeObject(33.9806, -117.3755, this.crimelocations));
  };

  logMessage(input: string) {
    /*
    console.log("Hello");
    this._userEntryService.addInput(input)
      .subscribe(resNewInput => {
        this.usinputs.push(input);
    
    });
    */
    if (this.mymap.has(input)) {
      this.validcity = true
    } else {
      this.validcity = false
    }
  }

  validCityValidator(control: AbstractControl): {[key: string]: any} | null {
    return (this.mymap.has(control.value)) ? { 'forbiddenCity' : { value: control.value }} : null;
  }
  
}
