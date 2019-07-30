import { Location } from '../Location'

export class cityCrimeObject {
    crimedata: Array<Location>
    centerlatitude: number
    centerlongitude: number
    parklatitude: number
    parklongitude: number
    constructor(lat: number, long: number, plat: number, plong: number, crimes: Array<Location>) {
      this.centerlatitude = lat;
      this.centerlongitude = long;
      this.parklatitude = plat;
      this.parklongitude = plong;
      this.crimedata = crimes;
    }
  }