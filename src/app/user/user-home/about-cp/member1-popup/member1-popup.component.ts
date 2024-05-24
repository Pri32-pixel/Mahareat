import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-member1-popup',
  templateUrl: './member1-popup.component.html',
  styleUrls: ['./member1-popup.component.css']
})
export class Member1PopupComponent {
  constructor(public bsModalRef: BsModalRef) {}

  closePopup1(): void {
    this.bsModalRef.hide();
  }

}
