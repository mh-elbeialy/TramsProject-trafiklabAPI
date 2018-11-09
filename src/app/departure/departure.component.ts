import { TramJourneyModel } from './../TramJourneyModel';
import { LocationService } from './../location.service';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-departure',
  templateUrl: './departure.component.html',
  styleUrls: ['./departure.component.css']
})
export class DepartureComponent {

  destinationStationName: string;
  stationId: string;
  departingTrams: TramJourneyModel[];
  defaultStation: string=  "Mårtensdal";
  searchText: string;

  constructor(public dataService: DataService,public locationService: LocationService){
    this.searchText = this.defaultStation;
    this.getData(dataService, locationService, this.defaultStation);

  }

  getData(dataService: DataService,locationService: LocationService, search){
    locationService.getSiteId(search).subscribe(response => {
          this.stationId = response.json().ResponseData.map(function (a, b) { return a.SiteId });
          console.log(this.stationId);
          dataService.getTramsByDestinationId(this.stationId)
          .subscribe(response => {
            this.departingTrams = response.json().ResponseData.Trams.map(function (a, b) { 
                return new TramJourneyModel(
                  a.JourneyNumber,
                  a.DisplayTime,
                  a.ExpectedDateTime,
                  a.StopAreaNumber,
                  a.Destination
                )
            });
            console.log(this.departingTrams);
            
          });
    });
  }
  filter() {
    this.getData(this.dataService, this.locationService, this.searchText?this.searchText:this.defaultStation);
  }


}