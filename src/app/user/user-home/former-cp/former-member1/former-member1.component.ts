import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-former-member1',
  templateUrl: './former-member1.component.html',
  styleUrls: ['./former-member1.component.css']
})
export class FormerMember1Component {

  constructor(public bsModalRef: BsModalRef) {}

  closePopup1(): void {
    this.bsModalRef.hide();
  }

}
