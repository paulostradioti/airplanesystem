import { AirplaneService } from '../airplane.service'
import { Component } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  public airplaneData: Array<any>;
  public currentAirplane: any;

  constructor(private airplaneService: AirplaneService) {

    airplaneService.get().subscribe((data: any) => this.airplaneData = data);

    this.currentAirplane = this.setInitialValuesForAirplaneData();
  }


  private setInitialValuesForAirplaneData() {
    return {
      code: undefined,
      model: '',
      created: undefined,
      lastUpdate: undefined
    }
  }

  public createOrUpdateAirplane = function (airplane: any) {
    let airplaneWithCode;
    airplaneWithCode = _.find(this.airplaneData, (el => el.code === airplane.code));

    if (airplaneWithCode) {
      const updateIndex = _.findIndex(this.airplaneData, { code: airplaneWithCode.code });

      this.airplaneService.update(airplane).subscribe(
        airplaneRecord => {
          airplane.lastUpdate = new Date();;
          this.airplaneData.splice(updateIndex, 1, airplane);
        }
      );

    } else {
      this.airplaneService.add(airplane).subscribe(
        airplaneRecord => this.airplaneData.push(airplaneRecord)
      );
    }

    this.currentAirplane = this.setInitialValuesForAirplaneData();
  };


  public editClicked = function (record) {
    this.currentAirplane = record;
  };

  public newClicked = function () {
    this.currentAirplane = this.setInitialValuesForAirplaneData();
  };

  public deleteClicked(record) {
    const deleteIndex = _.findIndex(this.airplaneData, { code: record.code });
    this.airplaneService.remove(record).subscribe(
      result => this.airplaneData.splice(deleteIndex, 1)
    );
  }

  function JSClock() {
      var time = new Date();
      var hour = time.getHours();
      var minute = time.getMinutes();
      var second = time.getSeconds();
      var temp = '' + ((hour > 12) ? hour - 12 : hour);
      if (hour == 0)
        temp = '12';
      temp += ((minute < 10) ? ':0' : ':') + minute;
      temp += ((second < 10) ? ':0' : ':') + second;
      temp += (hour >= 12) ? ' P.M.' : ' A.M.';
      return temp;
}



}
