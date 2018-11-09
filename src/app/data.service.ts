import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  constructor(public http: Http) { 
    
  }

  public getTramsByDestinationId(destinationId: string){
    return this.http.get("http://api.sl.se/api2/realtimedeparturesV4.json", {
      params: {
        key: '3bb4c5983d844416aed9493eed9db990',
        TimeWindow: 60,
        SiteID: destinationId,
        Metro: false,
        Train: false,
        Tram: true,
        Ship: false,
        Bus: false
      }
    });
  }


}
