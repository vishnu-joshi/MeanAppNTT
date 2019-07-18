import { Component, OnInit, Input } from '@angular/core';
import { UserEntry } from './../user-entry';
import { Location } from './../Location'
import { UserentryService } from './../userentry.service'
import { AgmCoreModule } from '@agm/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserentryService]
})
export class HomeComponent implements OnInit {

  usinputs: Array<UserEntry>;
  crimelocations: Array<Location>
  latitude = 33.9806;
  longitude = -117.3755;
  constructor(private _userEntryService: UserentryService) { }
 
  
  ngOnInit() {
    
      this._userEntryService.getInputs()
        .subscribe(resInputData => this.crimelocations = resInputData);
      console.log("this occurred");
  }

  logMessage(input: UserEntry) {
    console.log("Hello");
    this._userEntryService.addInput(input)
      .subscribe(resNewInput => {
        this.usinputs.push(input);
        
    });
  }
  
}
