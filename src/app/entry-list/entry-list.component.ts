import { Component, OnInit } from '@angular/core';
import { UserEntry } from '../user-entry';

@Component({
  selector: 'entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  inputs: ['inputs']
})
export class EntryListComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
      
  }

}
