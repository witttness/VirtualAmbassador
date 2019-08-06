import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  private visitorId: number = -1;
  private readonly VIS_ID_KEY = 'VISITOR-ID';

  constructor(private http: HttpClient) {
    this.loadVisitorId();
  }

  startVisit(ageRange: string, zipCode: string, groupType: string, education: string) {
    let data = {
      "AgeRange": ageRange,
      "ZipCode": zipCode,
      "GroupType": groupType,
      "EducationLevel": education
    };
    this.http.post<number>(`/VAmbassadorService/api/visit/Start`, data)
      .toPromise()
      .then(id => {
        this.storeVisitorId(id);
      });
  }

  startAnonymousVisit() {
    this.http.post<number>(`/VAmbassadorService/api/visit/StartAnonymous`, null)
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
    this.http.post<number>(`/VAmbassadorService/api/visit/SaveStats`, data);
  }

  saveRating(stationId: string, rating: number): void {
    let data = {
      "VisitorId": this.visitorId,
      "StationId": stationId,
      "Rate": rating
    };
    this.http.post<number>(`/VAmbassadorService/api/visit/SaveRating`, data);
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
}
