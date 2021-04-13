import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-acknowledge',
  templateUrl: './acknowledge.component.html',
  styleUrls: ['./acknowledge.component.css']
})
export class AcknowledgeComponent implements OnInit {

  // mean = null;
  // stdDev = null;
  list = null;


  constructor(private http: HttpClient, private router: Router) { 
    // this.mean = this.router.getCurrentNavigation().extras.state.mean;
    // this.stdDev = this.router.getCurrentNavigation().extras.state.std
  }

  onClick(param){

    //console.log("student id is:"+param);
    this.router.navigate(['/readSurvey'],{ state: { studentid: param } });
  }
  

  ngOnInit(): void {
    this.http.get<any>("http://a0f930571896f4bcb8386b48984a7e49-1513026135.us-east-1.elb.amazonaws.com/api/students").subscribe(data => {
    //console.log("data from api is:",data);
    this.list = data;
    })
  }

}
