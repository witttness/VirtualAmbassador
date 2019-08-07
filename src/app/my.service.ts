import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  private visitorId: number = -1;
  private readonly VIS_ID_KEY = 'VISITOR-ID';

  visitorData: { zip?: string, age?: string, group?: string, education?: string } = {};

  constructor(private http: HttpClient) {
    this.loadVisitorId();
  }

  startVisit() {
    let data = {
      "AgeRange": this.visitorData.age,
      "ZipCode": this.visitorData.zip,
      "GroupType": this.visitorData.group,
      "EducationLevel": this.visitorData.education
    };
    this.http.post<number>(`https://ec2-52-87-186-251.compute-1.amazonaws.com/VAmbassadorService/api/visit/Start`, data)
      .toPromise()
      .then(id => {
        this.storeVisitorId(id);
      });
  }

  startAnonymousVisit() {
    this.http.post<number>(`https://ec2-52-87-186-251.compute-1.amazonaws.com/VAmbassadorService/api/visit/StartAnonymous`, null)
      .toPromise()
      .then(id => {
        this.storeVisitorId(id);
      });
  }

  visitExhibit(stationId: string): void {
    let data = {
      "VisitorId": this.visitorId,
      "StationId": stationId,
      "Description": "",
    };
    this.http.post<number>(`https://ec2-52-87-186-251.compute-1.amazonaws.com/VAmbassadorService/api/visit/SaveStats`, data)
      .toPromise()
      .then(id => {
        console.info('saveStats id', id);
      });
  }

  saveRating(stationId: string, rating: number): void {
    let data = {
      "VisitorId": this.visitorId,
      "StationId": stationId,
      "Rate": rating
    };
    this.http.post<number>(`https://ec2-52-87-186-251.compute-1.amazonaws.com/VAmbassadorService/api/visit/SaveRating`, data)
    .toPromise()
    .then(id => {
      console.info('saveRating id', id);
    });
  }

  storeVisitorId(id: number) {
    this.visitorId = id;
    sessionStorage.setItem(this.VIS_ID_KEY, `${id}`);
  }

  loadVisitorId(): number {
    let visIdStr = sessionStorage.getItem(this.VIS_ID_KEY);
    let visId = parseInt(visIdStr);
    if (visId)
      this.visitorId = visId;
    return visId;
  }

  setVisitorZip(zip: string) {
    this.visitorData.zip = zip;
  }

  setVisitorAge(age: string) {
    this.visitorData.age = age;
  }

  setVisitorGroup(group: string) {
    this.visitorData.group = group;
  }

  setVisitorEducation(education: string) {
    this.visitorData.education = education;
  }
}
