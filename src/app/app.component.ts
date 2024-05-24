import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'maha-reat';
  constructor(private auth:AuthService){

  }
  ngOnInit() {
    this.getAuthToken();
  }

  getAuthToken(){
    this.auth.getAuthToken().subscribe((res:any)=>{
      console.log("res==>",res);
      sessionStorage.setItem('authToken',res.token)
      
    })
  }
}
