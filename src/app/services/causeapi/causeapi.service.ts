import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CauseapiService {

  constructor(private http:HttpClient) { }
  getDatas(idSearch:any){
     if(idSearch!=undefined && idSearch!=null && idSearch!='' && !Number.isNaN(idSearch)){
    //   return this.http.get('https://jsonplaceholder.typicode.com/users'+idSearch);
    return this.http.get('http://144.24.113.57:8085/api/Cause/GetCause/'+idSearch);
    
     }
     else
     //return this.http.get('https://jsonplaceholder.typicode.com/users');
     return this.http.get('http://144.24.113.57:8085/api/Cause/GetCause');

  }
  getCauseData(){
    
    //   return this.http.get('https://jsonplaceholder.typicode.com/users'+idSearch);
    return this.http.get('http://144.24.113.57:8085/api/Cause/GetAllCause');
    
     

  }
  getCauseBySubject(subjectText:any){
    
    //   return this.http.get('https://jsonplaceholder.typicode.com/users'+idSearch);
    return this.http.get('http://144.24.113.57:8085/api/Cause/GetCauseBySubject/'+subjectText);
    
     

  }
  getAuthToken(){
    let authData={
      "tUserLoginId" : "admin1",
      "tUserPassword" : "Admin@123"
  }
    //   return this.http.get('https://jsonplaceholder.typicode.com/users'+idSearch);
    return this.http.post('http://144.24.113.57:8085/authenticate',authData);
    
     

  }
}
