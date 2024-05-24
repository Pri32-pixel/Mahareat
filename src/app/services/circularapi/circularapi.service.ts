import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CircularapiService {

  constructor(private http:HttpClient) { }
  getDatas(idSearch:any){
     if(idSearch!=undefined && idSearch!=null && idSearch!='' && !Number.isNaN(idSearch)){
    //   return this.http.get('https://jsonplaceholder.typicode.com/users'+idSearch);
    return this.http.get('http://144.24.113.57:8085/api/Circular_notice/GetCircular_notice/'+idSearch);
    
     }
     else
     //return this.http.get('https://jsonplaceholder.typicode.com/users');
     return this.http.get('http://144.24.113.57:8085/api/Circular_notice/GetCircular_notice');

  }
  getCircularData(){
    
    //   return this.http.get('https://jsonplaceholder.typicode.com/users'+idSearch);
    return this.http.get('http://144.24.113.57:8085/api/Circular_notice/GetAllCircular_notice');
    
     

  }
  getCircularBySubject(subjectText:any){
    
    //   return this.http.get('https://jsonplaceholder.typicode.com/users'+idSearch);
    return this.http.get('http://144.24.113.57:8085/api/Circular_notice/GetCircularsBySubject/'+subjectText);
    
     

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

