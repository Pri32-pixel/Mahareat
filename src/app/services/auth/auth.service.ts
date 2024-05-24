import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  login(username: string, password: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

private createCompleteRoute = (route: string) => {
    return `${environment.loginApiUrl}/${route}`;
  }
private generateHeaders = () => {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
  }

getWFNextStatus(body:any){
    return this.http.post(this.createCompleteRoute("authenticate"), body, this.generateHeaders())
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
