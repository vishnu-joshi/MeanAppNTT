import { Component, OnInit, Input } from '@angular/core';
import { UserEntry } from './../user-entry';
import { UserentryService } from './../userentry.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserentryService]
})
export class HomeComponent implements OnInit {

  usinputs: Array<UserEntry>;
  
  constructor(private _userEntryService: UserentryService) { }
 
  
  ngOnInit() {
    
      this._userEntryService.getInputs()
        .subscribe(resInputData => this.usinputs = resInputData);
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
