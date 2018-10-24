import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AirplaneService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'https://localhost:5001/api/airplanes';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public get() {
    var test = this.http.get(this.accessPointUrl, { headers: this.headers })
    return test;
  }

  public getItem(payload) {
    var test = this.http.get(this.accessPointUrl + '/' + payload.code, { headers: this.headers })
    return test;
  }

  public add(payload) {
    return this.http.post(this.accessPointUrl, payload, { headers: this.headers });
  }

  public remove(payload) {
    return this.http.delete(this.accessPointUrl + '/' + payload.code, { headers: this.headers });
  }

  public update(payload) {
    return this.http.put(this.accessPointUrl + '/' + payload.code, payload, { headers: this.headers });
  }
}
