import { Component, OnInit} from '@angular/core';
import { UserentryService } from './../userentry.service'
import { UserEntry } from '../user-entry';

@Component({
  selector: 'app-newcityreq',
  templateUrl: './newcityreq.component.html',
  styleUrls: ['./newcityreq.component.css'],
  providers: [UserentryService]
})
export class NewcityreqComponent implements OnInit {

  newClicked = false;
  selectedInput: UserEntry;

  constructor(private _userEntryService: UserentryService) { }

  ngOnInit() {
  }

  submitReq(input: UserEntry) {
    this._userEntryService.addInput(input)
    .subscribe(resNewReq => {
      this.selectedInput = resNewReq;
    });
  }

}
