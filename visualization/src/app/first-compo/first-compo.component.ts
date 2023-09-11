import { Component, Input, OnInit } from '@angular/core';
import { DatasetService } from '../Services/dataset.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-first-compo',
  templateUrl: './first-compo.component.html',
  styleUrls: ['./first-compo.component.css']
})
export class FirstCompoComponent implements OnInit{
 

  totalCountries: number;
  totalRegions: number;
  totalSources: number;
  totalTopics:number;
  a:any;
  uniqueCountries = new Set();
  d:any

  constructor(private dataService:DatasetService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe((dat) => {
      
      this.a=JSON.stringify(dat)
      this.a=JSON.parse(this.a)
      
      this.d=this.a.data.datas
     
      this.d.forEach(data => {
        if (data.country) {
          this.uniqueCountries.add(data.country);
        }
      });
     
    this.totalCountries = Array.from(this.uniqueCountries).length;;
    
    this.totalRegions = new Set(this.d.map(item => item.region)).size;
    this.totalSources = new Set(this.d.map(item => item.source)).size;
    this.totalTopics = new Set(this.d.map(item=>item.topic)).size;
    
  })
  this.updateDashboard();

}

updateDashboard() {

  d3.select('#countries p').text('100');
  d3.select('#regions p').text('50');   
  d3.select('#sources p').text('20');  
  d3.select('#topics p').text('10')  
}

}
