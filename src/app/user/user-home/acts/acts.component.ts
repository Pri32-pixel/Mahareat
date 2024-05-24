import { Component } from '@angular/core';
import { PdfService } from '../shared/link-services/Services/pdf.service';


@Component({
  selector: 'app-acts',
  templateUrl: './acts.component.html',
  styleUrls: ['./acts.component.css']
})
export class ActsComponent {

  // pdfFiles: string[] = ['assets/pdf/dummy.pdf','assets/pdf/sample.pdf'];
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
