import { Component, OnInit } from '@angular/core';
import { DatasetService } from '../Services/dataset.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit{
  a
  d
  start_year 
  syearCounts
  syears
  scounts
  constructor(private dataservice:DatasetService){}

  ngOnInit(): void {
    this.dataservice.getData().subscribe((dat) => {
     
      this.a=JSON.stringify(dat)
      this.a=JSON.parse(this.a)
      
      this.d=this.a.data.datas
      
      this.d.forEach((item) => {
        this.start_year = item.start_year;
      
        if (this.syearCounts[this.start_year]) {
          this.syearCounts[this.start_year]++;
        } else {
          this.syearCounts[this.start_year] = 1;
        }
      })
     console.log(this.syearCounts,"nnnnnnf")
       
        this.syears = Object.keys(this.syearCounts);
      this.scounts = Object.values(this.syearCounts);
    this.startYear()
       
      });
      
  }
  

  startYear(){
    
    
 
  

  }


}
