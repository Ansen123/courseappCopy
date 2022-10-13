import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api.service.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  constructor(private myapi:ApiServiceService) { }
  courseTitle=""
  courseDescription=""
  courseDuration=""
  courseDate=""
  courseVenue=""
  readValues=()=>{
   let data={
    "courseTitle":this.courseTitle,
  "courseDescription":this.courseDescription,
  "courseDuration":this.courseDuration,
  "courseDate":this.courseDate,
  "courseVenue":this.courseVenue
   }
   console.log(data)
   this.myapi.addCourse(data).subscribe(
    (response)=>{
      console.log(response)
      alert("ok")
    }
   )
  }
  ngOnInit(): void {
  }

}
