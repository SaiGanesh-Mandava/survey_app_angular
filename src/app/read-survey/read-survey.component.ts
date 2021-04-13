import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-read-survey',
  templateUrl: './read-survey.component.html',
  styleUrls: ['./read-survey.component.css']
})
export class ReadSurveyComponent implements OnInit {
  studentid = null;
  studentData = null;
  check = {Students:false,Location:false,Campus:false,Atmosphere:false,Dormrooms:false,Sports:false}
  tokens: String[] = null;


  url = "http://a26d74647a44647afa5eacca55c1d9cc-280642794.us-east-1.elb.amazonaws.com/api/getstudent/";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };



  constructor(private http: HttpClient,private router: Router) {
    this.studentid = this.router.getCurrentNavigation().extras.state.studentid;

   }

   Homepage(){

    // console.log("student id is:"+param);
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.http.get<any>(this.url+this.studentid,this.httpOptions).subscribe(data=>{
      //console.log("student data from api is:",data);
      
      this.studentData = data;
      this.tokens = this.studentData.likemost.split(",");
      this.tokens.forEach(element => {
        if(element == "Students")
        {
          this.check.Students = true;
        }
        else if(element == "Location")
        {
          this.check.Location = true;
        }
        else if(element == "Campus")
        {
          this.check.Campus = true;
        }
        else if(element == "Atmosphere")
        {
          this.check.Atmosphere = true;
        }
        else if(element == "Dormrooms")
        {
          this.check.Dormrooms = true;
        }
        else if(element == "Sports")
        {
          this.check.Sports = true;
        }
      });
      });
  }

}
