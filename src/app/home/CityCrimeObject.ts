import { Location } from '../Location'

export class cityCrimeObject {
    crimedata: Array<Location>
    centerlatitude: Number
    centerlongitude: Number
    constructor(lat: Number, long: Number, crimes: Array<Location>) {
      this.centerlatitude = lat;
      this.centerlongitude = long;
      this.crimedata = crimes;
    }
  }