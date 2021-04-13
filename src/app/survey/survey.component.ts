import { Component, OnInit } from '@angular/core';

import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  record:any = {}
  likemost:any = {}
  // url = "http://localhost:8080/ApiTesting1/rest/api/putRecord"
  url = "http://a0f930571896f4bcb8386b48984a7e49-1513026135.us-east-1.elb.amazonaws.com/api/addstudent"
  
  constructor(private http: HttpClient, private router: Router) {
  }

  
 ngOnInit(): void {
 }

 httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };

 onSubmit(form){
   if(form.valid)
   {
    this.record.likemost = Object.keys(this.likemost).filter((k:any) => this.likemost[k]).toString();
    //console.log("record is:",this.record);

    this.http.post<any>(this.url,this.record,this.httpOptions).subscribe(data=>{
      this.router.navigate(['/acknowledge']);

    });
   }
   else{
     alert("Required fields must be entered");
   }

 }
}
