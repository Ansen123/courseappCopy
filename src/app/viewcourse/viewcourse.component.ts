import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api.service.service';

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.css']
})
export class ViewcourseComponent implements OnInit {

  constructor(private myapi:ApiServiceService) {
    this.fetchData()
   }
   status:boolean=false
   fetchData=()=>{
    this.myapi.viewCourse().subscribe(
      (data)=>{
        this.courseData=data
        this.status=true
      }
    )
   }
courseData:any = []

  ngOnInit(): void {
  }

}

 