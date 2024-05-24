import { Component, OnInit } from '@angular/core';
import { PdfService } from '../shared/link-services/Services/pdf.service';

@Component({
  selector: 'app-key-judgement',
  templateUrl: './key-judgement.component.html',
  styleUrls: ['./key-judgement.component.css']
})
export class KeyJudgementComponent implements OnInit{

  public dateSearch!:string;
  public subjectSearch!:string;
  public apiDatas !: any[];
  constructor(private pdfservice: PdfService){

  }

  downloadPdf(filepath:string):void{
    this.pdfservice.downloadPdf(filepath).
    subscribe((data:Blob)=>{
      const blob = new Blob([data],
        {type: 'application/pdf'});
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'downloded-file.pdf';
       
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    });
  }

  ngOnInit(): void {
  
  }

}
