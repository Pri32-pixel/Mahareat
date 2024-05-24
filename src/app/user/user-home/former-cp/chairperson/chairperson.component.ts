import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-chairperson',
  templateUrl: './chairperson.component.html',
  styleUrls: ['./chairperson.component.css']
})
export class ChairpersonComponent {

  constructor(public bsModalRef: BsModalRef) {}

  closePopup(): void {
    this.bsModalRef.hide();
  }

}
