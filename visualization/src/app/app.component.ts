import { Component, OnInit } from '@angular/core';
import { json } from 'express';
import { HttpClient } from '@angular/common/http';
import { DatasetService } from './Services/dataset.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'visualization';
  constructor(private dataService:DatasetService){}
   data:any
   jsonData:any

  ngOnInit(): void {
   
    
  

  
    
    
    
  }

}