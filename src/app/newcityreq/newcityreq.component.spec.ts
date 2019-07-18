import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcityreqComponent } from './newcityreq.component';

describe('NewcityreqComponent', () => {
  let component: NewcityreqComponent;
  let fixture: ComponentFixture<NewcityreqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcityreqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcityreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
