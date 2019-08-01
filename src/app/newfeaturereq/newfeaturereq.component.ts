import { Component, OnInit } from '@angular/core';
import { UserEntry } from '../user-entry';
import { UserentryService } from '../userentry.service';

@Component({
  selector: 'app-newfeaturereq',
  templateUrl: './newfeaturereq.component.html',
  styleUrls: ['./newfeaturereq.component.css'],
  providers: [UserentryService]
})
export class NewfeaturereqComponent implements OnInit {

  newClicked = false;
  selectedInput: UserEntry;

  constructor(private _userEntryService: UserentryService) { }

  ngOnInit() {
  }

  submitReq(input: UserEntry) {
    this._userEntryService.addFeatureInput(input)
    .subscribe(resNewReq => {
      this.selectedInput = resNewReq;
    });
  }
}
