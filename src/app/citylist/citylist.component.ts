import { Component, OnInit } from '@angular/core';
import { UserentryService } from './../userentry.service'
import { ValidCity } from '../ValidCity'
import { cityCrimeObject } from '../home/CityCrimeObject';

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrls: ['./citylist.component.css']
})
export class CitylistComponent implements OnInit {

  constructor(private _userEntryService: UserentryService) { }

  
  
  
  allvalidcities: Array<ValidCity>;
  
  
  
  ngOnInit() {
    this._userEntryService.getCities()
    .subscribe(resInputData => {
      this.allvalidcities = resInputData      
    })
  }

}
