import { Component, OnInit } from '@angular/core';
import { PdfService } from 'src/app/user/user-home/shared/link-services/Services/pdf.service';

@Component({
  selector: 'app-admin-cause-list',
  templateUrl: './admin-cause-list.component.html',
  styleUrls: ['./admin-cause-list.component.css']
})
export class AdminCauseListComponent implements OnInit{

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

