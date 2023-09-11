import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatasetService {

  constructor(private http:HttpClient) { }

  data:any
  jsonData:any

  apiUrl = 'http://127.0.0.1:3000/api/datas';
  
  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
