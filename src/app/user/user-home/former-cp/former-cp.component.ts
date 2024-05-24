import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormerMember1Component } from './former-member1/former-member1.component';
import { FormerMember2Component } from './former-member2/former-member2.component';
import { ChairpersonComponent } from './chairperson/chairperson.component';

@Component({
  selector: 'app-former-cp',
  templateUrl: './former-cp.component.html',
  styleUrls: ['./former-cp.component.css']
})
export class FormerCpComponent {
  selectedOption: string = 'cp';
  showCpCard : boolean = true;
  showDpCard: boolean = false;
  yourLongParagraph:any = ``;
  
  modalRef1!: BsModalRef;
  modalRef2!: BsModalRef;

  constructor(private modalService: BsModalService) {}

  openPopup() {
    this.modalRef1 = this.modalService.show(ChairpersonComponent, {
      class: 'modal-lg',
    });
  }

  openPopup1() {
    this.modalRef1 = this.modalService.show(FormerMember1Component, {
      class: 'modal-lg',
    });
  }

  openPopup2() {
    this.modalRef2 = this.modalService.show(FormerMember2Component, {
      class: 'modal-lg'
    });
  }

  showFullParagraph: boolean = false;
  showFullParagraph1: boolean = false;

  toggleParagraph(){
    this.showFullParagraph = !this.showFullParagraph;
  }
  toggleParagraphOne(){
    this.showFullParagraph1 = !this.showFullParagraph1;
  }

  renderCard(){
 
  this.showCpCard = false;
  this.showDpCard = false;

  if(this.selectedOption === 'cp'){
    this.showCpCard = true;
  }else if(this.selectedOption === 'dp'){
    this.showDpCard = true;
  }

  }

}
