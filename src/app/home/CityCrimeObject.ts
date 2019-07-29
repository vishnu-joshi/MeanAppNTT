import { Location } from '../Location'

export class cityCrimeObject {
    crimedata: Array<Location>
    centerlatitude: Number
    centerlongitude: Number
    parklatitude: number
    parklongitude: number
    constructor(lat: Number, long: Number, plat: number, plong: number, crimes: Array<Location>) {
      this.centerlatitude = lat;
      this.centerlongitude = long;
      this.parklatitude = plat;
      this.parklongitude = plong;
      this.crimedata = crimes;
    }
  }