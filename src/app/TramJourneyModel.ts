export class TramJourneyModel{
    journeyNumber: string;
    expectedTimeInMinutes: string;
    expectedDateTime: Date;
    sourceStationNumber: string;
    DestinationStationName: string;

    constructor(journeyNumber, expectedTimeInMinutes,expectedDateTime, sourceStationNumber, DestinationStationName){
        this.journeyNumber = journeyNumber;
        this.expectedTimeInMinutes = expectedTimeInMinutes;
        this.expectedDateTime = expectedDateTime;
        this.sourceStationNumber = sourceStationNumber;
        this.DestinationStationName = DestinationStationName;
    }
}