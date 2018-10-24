import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-or-update-airplane',
  templateUrl: './add-or-update-airplane.component.html',
  styleUrls: ['./add-or-update-airplane.component.css']
})
export class AddOrUpdateAirplaneComponent implements OnInit {
  @Output() airplaneCreated = new EventEmitter<any>();
  @Input() airplaneInfo: any;

  public buttonText = 'Save';


  constructor() {
    this.clearAirplaneInfo();
    console.log(this.airplaneInfo.model);
  }

  ngOnInit() {
  }

  private clearAirplaneInfo = function () {
    this.airplaneInfo = {
      code: undefined,
      model: '',
      passengers: 0,
      created: undefined,
      lastUpdate: undefined
    };
  };

  public addOrUpdateAirplaneRecord = function (event) {
    this.airplaneCreated.emit(this.airplaneInfo);
    this.clearAirplaneInfo();
  };



}
