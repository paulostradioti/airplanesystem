import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrUpdateAirplaneComponent } from './add-or-update-airplane.component';

describe('AddOrUpdateAirplaneComponent', () => {
  let component: AddOrUpdateAirplaneComponent;
  let fixture: ComponentFixture<AddOrUpdateAirplaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrUpdateAirplaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrUpdateAirplaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
