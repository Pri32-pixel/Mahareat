import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Member1PopupComponent } from './member1-popup/member1-popup.component';
import { Member2PopupComponent } from './member2-popup/member2-popup.component';

@Component({
  selector: 'app-about-cp',
  templateUrl: './about-cp.component.html',
  styleUrls: ['./about-cp.component.css']
})
export class AboutCpComponent {

  selectedOption: string = 'cp';
  showCpCard : boolean = true;
  showDpCard: boolean = false;
  yourLongParagraph:any = ``;

  modalRef1!: BsModalRef;
  modalRef2!: BsModalRef;

  constructor(private modalService: BsModalService) {}

  openPopup1() {
    this.modalRef1 = this.modalService.show(Member1PopupComponent, {
      class: 'modal-lg',
    });
  }

  openPopup2() {
    this.modalRef2 = this.modalService.show(Member2PopupComponent, {
      class: 'modal-lg'
    });
  }
  
  showFullParagraph: boolean = false;
  showFullParagraph1: boolean = false;
  showFullParagraph2: boolean = false;

  toggleParagraph(){
    this.showFullParagraph = !this.showFullParagraph;
  }
  toggleParagraphOne(){
    this.showFullParagraph1 = !this.showFullParagraph1;
  }
  toggleParagraphTwo(){
    this.showFullParagraph2 = !this.showFullParagraph2;
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
