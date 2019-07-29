import { Location } from '../Location'

export class cityCrimeObject {
    crimedata: Array<Location>
    centerlatitude: Number
    centerlongitude: Number
    parklatitude: Number
    parklongitude: Number
    constructor(lat: Number, long: Number, plat: Number, plong: Number, crimes: Array<Location>) {
      this.centerlatitude = lat;
      this.centerlongitude = long;
      this.parklatitude = plat;
      this.parklongitude = plong;
      this.crimedata = crimes;
    }
  }