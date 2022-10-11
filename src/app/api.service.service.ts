import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }
  viewCourse=()=>{
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
}
