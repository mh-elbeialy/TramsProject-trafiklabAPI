import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class LocationService {

  constructor(public http: Http) { }

  public getSiteId (siteName: string){
    return this.http.get("https://api.sl.se/api2/typeahead.json", {
      params: {
        key: '6c6f132b590241379faeedf5fda2608f',
        SearchString: siteName,
        MaxResults: '1'
      }
    });
  }
}
