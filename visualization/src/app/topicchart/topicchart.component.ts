import { Component, Input, OnInit } from '@angular/core';
import { DatasetService } from '../Services/dataset.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-topicchart',
  templateUrl: './topicchart.component.html',
  styleUrls: ['./topicchart.component.css']
})
export class TopicchartComponent implements OnInit{
  @Input() parentdata:any
  a:any;
  d:any;
  topicCounts = {};
  topicjson:any;
  topic:any
  topics:any
  counts:any
  uniqueTopics = new Set();
  regionCounts={}
  region
  regions
  countr
  constructor(private dataService:DatasetService) { }

ngOnInit(): void {
  this.dataService.getData().subscribe((dat) => {
    
    this.a=JSON.stringify(dat)
    this.a=JSON.parse(this.a)
    
    this.d=this.a.data.datas
    
    this.d.forEach((item) => {
      this.topic = item.topic;
     
      if (this.topicCounts[this.topic]) {
        this.topicCounts[this.topic]++;
      } else {
        this.topicCounts[this.topic] = 1;
      }
      this.region = item.region;
     
      if (this.regionCounts[this.region]) {
        this.regionCounts[this.region]++;
      } else {
        this.regionCounts[this.region] = 1;
      }
      
    });
    
      
    
    
   

    
    this.topics = Object.keys(this.topicCounts);
 this.counts = Object.values(this.topicCounts);
 this.regions = Object.keys(this.regionCounts);
 this.countr = Object.values(this.regionCounts);
this.updateDashboard();
this.updateregion()
      
    });
    
  

 

  
  
  
}  
updateDashboard(){
  
  const colorScale = d3.scaleOrdinal()
  .domain(this.topics)
  .range(["#FF5733", "#FFD700", "#228B22", "#4169E1", "#FF6347", "#7B68EE", ])
  
  



const width = 700; 
const height = 400; 
const margin = { top: 50, right: 30, bottom: 40, left: 40 };


const svg = d3.select("#chart-container")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  ;
  
  

  


const chartWidth = width - margin.left - margin.right;
const chartHeight = height - margin.top - margin.bottom;


const chart = svg.append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`)
  
  


const xScale = d3.scaleBand()
  .domain(this.topics)
  .range([0, chartWidth])
  .padding(0.1);

const yScale = d3.scaleLinear()
  .domain([0, d3.max(this.counts)])
  .nice()
  .range([chartHeight, 0]);

chart.selectAll(".bar")
  .data(this.counts)
  .enter()
  .append("rect")
  .attr("class", "bar")
  .style("fill","#0B5345")
 
  .attr("x", (d, i) => xScale(this.topics[i]))
  .attr("y", d => yScale(d))
  .attr("width", xScale.bandwidth())
  .attr("height", d => chartHeight - yScale(d));
  



chart.append("g")
  .attr("class", "x-axis")
  .attr("transform", `translate(0,${chartHeight})`)
  

  

  

  
chart.append("g")
  .attr("class", "y-axis")
  .call(d3.axisLeft(yScale));

  chart.append("g")
  .attr("d", this.topics)
  .attr("fill", "#FF5733")
  .attr("stroke", "#333") 
  .attr("stroke-width", 2)
  .style("opacity", 0.8); 

  svg.selectAll(".axis-text")
  .style("font-size", "12px")
  .style("fill", "#333")
.style("justify-content","center");
  svg.selectAll(".chart-title")
  .style("font-size", "16px")
  .style("fill", "blue");

  svg.style("background-color", "#E8F6F3")
  svg.style("margin-left","50px")
  svg.style("margin-top","50px")
 
const g = svg.append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);


  svg.append("text")
  .attr("x", width / 2) 
  .attr("y", 20) 
  .attr("text-anchor", "middle") 
  .attr("font-size", "18px")
  .attr("fill", "black") 
  .text("TOPICS AND THEIR COUNTS"); 





}
updateregion(){
  const colorScale = d3.scaleOrdinal()
  .domain(this.topics)
  .range(["#FF5733", "#FFD700", "#228B22", "#4169E1", "#FF6347", "#7B68EE", /* Add more colors */])
  
 
const width = 700; 
const height = 400;
const margin = { top: 50, right: 30, bottom: 40, left: 40 }; 


const svg = d3.select("#chart-container")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  ;
  
  

  

const chartWidth = width - margin.left - margin.right;
const chartHeight = height - margin.top - margin.bottom;


const chart = svg.append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`)
  
  


const xScale = d3.scaleBand()
  .domain(this.regions)
  .range([0, chartWidth])
  .padding(0.1);

const yScale = d3.scaleLinear()
  .domain([0, d3.max(this.countr)])
  .nice()
  .range([chartHeight, 0]);


chart.selectAll(".bar")
  .data(this.countr)
  .enter()
  .append("rect")
  .attr("class", "bar")
  .style("fill","#0B5345")

  .attr("x", (d, i) => xScale(this.regions[i]))
  .attr("y", d => yScale(d))
  .attr("width", xScale.bandwidth())
  .attr("height", d => chartHeight - yScale(d));
  



chart.append("g")
  .attr("class", "x-axis")
  .attr("transform", `translate(0,${chartHeight})`)
  

  

  

chart.append("g")
  .attr("class", "y-axis")
  .call(d3.axisLeft(yScale));

  chart.append("g")
  .attr("d", this.regions)
  .attr("fill", "#FF5733")
  .attr("stroke", "#333")
  .attr("stroke-width", 2) 
  .style("opacity", 0.8); 

  svg.selectAll(".axis-text")
  .style("font-size", "12px")
  .style("fill", "#333")
.style("justify-content","center");
  svg.selectAll(".chart-title")
  .style("font-size", "16px")
  .style("fill", "blue");

  svg.style("background-color", "#E8F6F3")
  svg.style("margin-left","100px")
  svg.style("margin-top","50px")

 
svg.append("text")
.attr("x", width / 2) 
.attr("y", 20) 
.attr("text-anchor", "middle") 
.attr("font-size", "18px") 
.attr("fill", "black")
.text("REGION AND THEIR COUNTS"); 

 

const g = svg.append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);
}

}
