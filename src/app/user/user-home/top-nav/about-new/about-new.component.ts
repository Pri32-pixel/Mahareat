import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-new',
  templateUrl: './about-new.component.html',
  styleUrls: ['./about-new.component.css']
})
export class AboutNewComponent {

  constructor(private router:Router){

  }

  // redirectToUrl(url:any){
  //   this.router.navigate(['/'+ url])
  // }
}
