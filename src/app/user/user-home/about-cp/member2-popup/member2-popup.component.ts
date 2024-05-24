import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-member2-popup',
  templateUrl: './member2-popup.component.html',
  styleUrls: ['./member2-popup.component.css']
})

export class Member2PopupComponent {
  constructor(public bsModalRef: BsModalRef) {}

  closePopup2(): void {
    this.bsModalRef.hide();
  }

}
