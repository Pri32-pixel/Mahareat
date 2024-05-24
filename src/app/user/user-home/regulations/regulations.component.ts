import { Component } from '@angular/core';
import { PdfService } from '../shared/link-services/Services/pdf.service';

@Component({
  selector: 'app-regulations',
  templateUrl: './regulations.component.html',
  styleUrls: ['./regulations.component.css']
})
export class RegulationsComponent {
  constructor(private pdfservice: PdfService ){

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
  hellomsg(){
    console.log("hello");
  }


}

