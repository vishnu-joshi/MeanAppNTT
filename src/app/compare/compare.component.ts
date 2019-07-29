import { Component, OnInit, Input } from '@angular/core';
import { UserentryService } from '../userentry.service'
import { ValidCity } from '../ValidCity'
import { Location } from '../Location'
import { cityCrimeObject } from '../home/CityCrimeObject'
import { cityEntry } from '../home/cityEntry';
import { Chart } from 'chart.js'
import { element } from 'protractor';
import { getLocaleNumberSymbol } from '@angular/common';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css'],
  providers: [UserentryService]
})
export class CompareComponent implements OnInit {

  public validcities: Array<ValidCity>;
  crimelocations1: Array<Location>;
  crimelocations2: Array<Location>;
  mymap = new Map<String, cityCrimeObject>();
  validcity1 = true;
  validcity2 = true;
  cityattempt1 = new cityEntry("");
  cityattempt2 = new cityEntry("");
  labels1 = []
  labels2 = []
  datapie1 = []
  datapie2 = []
  parklat1 = 0
  parklat2 = 0
  parklong1 = 0
  parklong2 = 0
  lat1 = 0
  lat2 = 0
  long1 = 0
  long2 = 0
  pieChart1: Chart
  pieChart2: Chart


  constructor(private _userEntryService: UserentryService) { }

  ngOnInit() {
    this._userEntryService.getCities()
      .subscribe(resInputData => {
        this.validcities = resInputData
        this.validcities.forEach(element => {
          console.log(element.cityname)
          this.mymap.set(element.cityname, new cityCrimeObject(element.centerlat, element.centerlong, 0, 0, []))
        });        
      })
  }

  checkCity(input: String) {
    if (this.mymap.has(input)) {
      this.validcity1 = true;
      if (this.mymap.get(input).crimedata.length == 0) {
        this._userEntryService.getInputs(this.deleteAfterComma(input))
        .subscribe(resInputData =>  {
          this.crimelocations1 = resInputData;
          this.mymap.get(input).crimedata = this.crimelocations1;
          this.parklat1 = Number(this.mymap.get(input).parklatitude)
          this.parklong1 = Number(this.mymap.get(input).parklongitude)
          this.lat1 = Number(this.mymap.get(input).centerlatitude)
          this.long1 = Number(this.mymap.get(input).centerlongitude)
          console.log("Not seen yet")
          this.renderGraph1(this.crimelocations1, this.labels1)
          this.changeChart1(this.labels1, this.datapie1);
          this.distFromParks1(this.mymap.get(input).parklatitude, this.mymap.get(input).parklongitude)
        })
      } else {
        this.crimelocations1 = this.mymap.get(input).crimedata
        this.parklat1 = Number(this.mymap.get(input).parklatitude)
        this.parklong1 = Number(this.mymap.get(input).parklongitude)
        this.lat1 = Number(this.mymap.get(input).centerlatitude)
        this.long1 = Number(this.mymap.get(input).centerlongitude)
        console.log("Already seen")
        this.renderGraph1(this.crimelocations1, this.labels1)
        this.changeChart1(this.labels1, this.datapie1);
      }
      
    } else {
      this.validcity1 = false;
    }
  }

  checkCity2(input: String) {
    if (this.mymap.has(input)) {
      this.validcity2 = true;
      if (this.mymap.get(input).crimedata.length == 0) {
        this._userEntryService.getInputs(this.deleteAfterComma(input))
        .subscribe(resInputData =>  {
          this.crimelocations2 = resInputData;
          this.mymap.get(input).crimedata = this.crimelocations2;
          this.parklat2 = Number(this.mymap.get(input).parklatitude)
          this.parklong2 = Number(this.mymap.get(input).parklongitude)
          this.lat2 = Number(this.mymap.get(input).centerlatitude)
          this.long2 = Number(this.mymap.get(input).centerlongitude)
          console.log("Not seen yet")
          this.renderGraph2(this.crimelocations2, this.labels2);
          this.changeChart2(this.labels2, this.datapie2);
        })
      } else {
        this.crimelocations2 = this.mymap.get(input).crimedata
        this.parklat2 = Number(this.mymap.get(input).parklatitude)
        this.parklong2 = Number(this.mymap.get(input).parklongitude)
        this.lat2 = Number(this.mymap.get(input).centerlatitude)
        this.long2 = Number(this.mymap.get(input).centerlongitude)
        console.log("Already seen")
        this.renderGraph2(this.crimelocations2, this.labels2);
        this.changeChart2(this.labels2, this.datapie2);
      }
      
    } else {
      this.validcity2 = false;
    }
  }
  
  deleteAfterComma(input: String):String {
    var comma = input.indexOf(',');
    return input.substring(0, comma)
  }
  
  renderGraph1(crimes: Array<Location>, labels: Array<string>) {
    var x: Map<string, number> = new Map<string, number>();
    var labelslist: string[]
    var tempdata: number[] = []
    var i: number
    var j: number
    var maxindex: number;
    var max: number
    var sum: number = 0
    crimes.forEach(element => {
      if (x.has((element.typeOfCrime.toString()))) {
        x.set(element.typeOfCrime.toString(), x.get(element.typeOfCrime.toString()) + 1)
      } else {
        x.set(element.typeOfCrime.toString(), 1)
      }
    })
    labelslist = Array.from( x.keys() );
    x.forEach(element => {
      tempdata.push(element)
    })
    
    labels = []
    this.labels1 = []
    this.datapie1 = []
    for (i = 0; i < 6; i += 1) {
      max = 0
      maxindex = -1
      j = 0
      tempdata.forEach(element => {
        if (element > max) {
          max = element
          maxindex = j
        }
        j++
      });
      sum += max
      this.labels1.push(labelslist[maxindex])
      labelslist.splice(maxindex, 1)
      this.datapie1.push(tempdata[maxindex])
      tempdata.splice(maxindex, 1)
    }
    this.labels1.push("Other (Non city Reported)")
    this.datapie1.push(1000 - sum)
  };


  renderGraph2(crimes: Array<Location>, labels: Array<string>) {
    var x: Map<string, number> = new Map<string, number>();
    var labelslist: string[]
    var tempdata: number[] = []
    var i: number
    var j: number
    var maxindex: number;
    var max: number
    var sum: number = 0
    crimes.forEach(element => {
      if (x.has((element.typeOfCrime.toString()))) {
        x.set(element.typeOfCrime.toString(), x.get(element.typeOfCrime.toString()) + 1)
      } else {
        x.set(element.typeOfCrime.toString(), 1)
      }
    })
    labelslist = Array.from( x.keys() );
    x.forEach(element => {
      tempdata.push(element)
    })
    
    labels = []
    this.labels2 = []
    this.datapie2 = []
    for (i = 0; i < 6; i += 1) {
      max = 0
      maxindex = -1
      j = 0
      tempdata.forEach(element => {
        if (element > max) {
          max = element
          maxindex = j
        }
        j++
      });
      sum += max
      this.labels2.push(labelslist[maxindex])
      labelslist.splice(maxindex, 1)
      this.datapie2.push(tempdata[maxindex])
      tempdata.splice(maxindex, 1)
    }
    this.labels2.push("Other (Non city Reported)")
    this.datapie2.push(1000 - sum)
  };

  changeChart1(labels: Array<string>, datapie: Array<number>) {
    this.pieChart1 = new Chart('pieChart1', {
      type: "pie",
      data: {
        labels: labels,
        datasets: [{
            
            label: '# of Votes',
            data: datapie,
            
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
    });
  }

  changeChart2(labels: Array<string>, datapie: Array<number>) {
    this.pieChart2 = new Chart('pieChart2', {
      type: "pie",
      data: {
        labels: labels,
        datasets: [{
            
            label: '# of Votes',
            data: datapie,
            
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
    });
  }

  distFromParks1(lat: number, long: number) {

  }
}


