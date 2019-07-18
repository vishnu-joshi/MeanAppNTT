import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewfeaturereqComponent } from './newfeaturereq.component';

describe('NewfeaturereqComponent', () => {
  let component: NewfeaturereqComponent;
  let fixture: ComponentFixture<NewfeaturereqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewfeaturereqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewfeaturereqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
