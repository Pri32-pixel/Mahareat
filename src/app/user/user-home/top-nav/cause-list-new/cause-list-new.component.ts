import { Component, OnInit } from '@angular/core';
import { PdfService } from '../../shared/link-services/Services/pdf.service';
import { CauseapiService } from 'src/app/services/causeapi/causeapi.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-cause-list-new',
  templateUrl: './cause-list-new.component.html',
  styleUrls: ['./cause-list-new.component.css']
})
export class CauseListNewComponent implements OnInit{

  public dateSearch!:string;
  public subjectSearch!:string;
  causeListForm!:FormGroup
  public apiDatas !: any[];
  causeData: any;
  constructor(private pdfservice: PdfService,private causeapi:CauseapiService, private fb:FormBuilder){

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

  searchApiData():void {
    
    // console.log(reqObject);
    this.getResponseData();
  }

  getResponseData():void{
    const reqObject = {
      "date": this.dateSearch,
      "subject":this.subjectSearch
    }
    console.log(reqObject);
    
    this.causeapi.getDatas(parseInt(this.subjectSearch)).subscribe((ele:any)=>{
      console.log(ele);
      if(this.subjectSearch!=undefined && this.subjectSearch!=null && this.subjectSearch!='' && !Number.isNaN(this.subjectSearch))
      {
      
        this.apiDatas=[ele];
      }
      else
      
      this.apiDatas=ele;

    })

  }
  ngOnInit(): void {
    
    this.initializeForms();
   
  }

  resetData():void{
  this.dateSearch='';
  this.subjectSearch='';
  this.getResponseData();
  }
  initializeForms(){
    this.causeListForm=this.fb.group({
      searchInput:[''],
      fromDate:[null,Validators.required],
      toDate:[null,Validators.required],
    })
  }
  getCauseData(){
   
    this.causeapi.getCauseData().subscribe((res:any)=>{
      console.log("res",res);
      this.causeData=res.result;
    })
  }
  getCauseBySubject(){
    
    this.causeapi.getCauseBySubject(this.causeListForm.get('searchInput')?.value).subscribe((res:any)=>{
      console.log("res LENGTH",res.result.length);
      
      
      if(res.result?.length=='0'){
        alert('No Data found')
        console.log("no data");
        
      }
      else{
        this.causeData=res.result;
        console.log("this.causeData",this.causeData);
      }
      this.causeListForm.reset();
    })
  }
  resetForm(){
    this.causeListForm.reset();
  }
}
