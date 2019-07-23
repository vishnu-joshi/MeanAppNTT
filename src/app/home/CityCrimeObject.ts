import { Location } from '../Location'

export class cityCrimeObject {
    crimelocations: Array<Location>
    centerlatitude: Number
    centerlongitude: Number
    constructor(lat: Number, long: Number, locations: Array<Location>) {
      this.centerlatitude = lat;
      this.centerlongitude = long;
      this.crimelocations = locations;
    }
  }