import { Component } from '@angular/core';
import { PdfService } from '../../shared/link-services/Services/pdf.service';
import { CircularapiService } from 'src/app/services/circularapi/circularapi.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-circular-notice-new',
  templateUrl: './circular-notice-new.component.html',
  styleUrls: ['./circular-notice-new.component.css']
})
export class CircularNoticeNewComponent {
  public dateSearch!:string;
  public subjectSearch!:string;
  circularListForm!:FormGroup
  public apiDatas !: any[];
  circularData: any;
  constructor(private pdfservice: PdfService,private circularapi:CircularapiService, private fb:FormBuilder){

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
    
    this.circularapi.getDatas(parseInt(this.subjectSearch)).subscribe((ele:any)=>{
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
    this.circularListForm=this.fb.group({
      searchInput:[''],
      fromDate:[null,Validators.required],
      toDate:[null,Validators.required],
    })
  }
  getCircularData(){
   
    this.circularapi.getCircularData().subscribe((res:any)=>{
      console.log("res",res);
      this.circularData=res.result;
    })
  }
  getCircularBySubject(){
    
    this.circularapi.getCircularBySubject(this.circularListForm.get('searchInput')?.value).subscribe((res:any)=>{
      console.log("res LENGTH",res.result.length);
      
      
      if(res.result?.length=='0'){
        alert('No Data found')
        console.log("no data");
        
      }
      else{
        this.circularData=res.result;
        console.log("this.circularData",this.circularData);
      }
      this.circularListForm.reset();
    })
  }
  resetForm(){
    this.circularListForm.reset();
  }
}
