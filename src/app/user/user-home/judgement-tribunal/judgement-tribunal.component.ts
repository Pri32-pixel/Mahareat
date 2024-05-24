import { Component, OnInit } from '@angular/core';
import { PdfService } from '../shared/link-services/Services/pdf.service';
import { JudgementapiService } from 'src/app/services/judgementapi/judgementapi.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-judgement-tribunal',
  templateUrl: './judgement-tribunal.component.html',
  styleUrls: ['./judgement-tribunal.component.css']
})
export class JudgementTribunalComponent implements OnInit{

  public dateSearch!:string;
  public subjectSearch!:string;
  judgementListForm!:FormGroup
  public apiDatas !: any[];
  judgementData: any;
  constructor(private pdfservice: PdfService,private judgementapi:JudgementapiService, private fb:FormBuilder){

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
    
    this.judgementapi.getDatas(parseInt(this.subjectSearch)).subscribe((ele:any)=>{
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
    this.judgementListForm=this.fb.group({
      searchInput:[''],
      fromDate:[null,Validators.required],
      toDate:[null,Validators.required],
    })
  }
  getJudgementData(){
   
    this.judgementapi.getJudgementData().subscribe((res:any)=>{
      console.log("res",res);
      this.judgementData=res.result;
    })
  }
  getJudgementBySubject(){
    
    this.judgementapi.getJudgementBySubject(this.judgementListForm.get('searchInput')?.value).subscribe((res:any)=>{
      console.log("res LENGTH",res.result.length);
      
      
      if(res.result?.length=='0'){
        alert('No Data found')
        console.log("no data");
        
      }
      else{
        this.judgementData=res.result;
        console.log("this.judgementData",this.judgementData);
      }
      this.judgementListForm.reset();
    })
  }
  resetForm(){
    this.judgementListForm.reset();
  }
}
