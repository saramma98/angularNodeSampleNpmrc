import { Component, OnInit } from '@angular/core';
import{ContentGetPostService} from 'src/app/service/content-get-post.service';
import{LogicService} from 'src/app/logic.service';
import { filecontent } from '../class/fileContent';


@Component({
  selector: 'app-edit-file',
  templateUrl: './edit-file.component.html',
  styleUrls: ['./edit-file.component.css']
})
export class EditFileComponent implements OnInit {

  filecontent =new filecontent();
  key:string;
  value:string;
  

  constructor( public log: LogicService, private contentgetpostservice:ContentGetPostService) { }

  ngOnInit(): void {
    this.getFileContent();
  }


  getFileContent(){
   
    this.contentgetpostservice.GetFileContent().subscribe((response:any) => {
      //console.log(response);

      this.content(response);
      
    })
  
  } // end of getfileContent

  content(response){
    var array =[];
    var keyValue=[];

    if(response && response.length>0) {
      response=response.split(/\r?\n/);
    
      response.forEach(element =>{
        keyValue= element.split(":");
        if(keyValue.length==2){
          this.log.jsonContent.push({
            "name" :keyValue[0],
            "value" :keyValue[1]
          })
        }
      })
    } 


  }

  add(){
    this.key = prompt("enter the key "," ");
   this. value= prompt("enter the value", " ");
   console.log(this.key,this.value);
    this.log.jsonContent.push({
      "name" : this.key,
      "value" :this.value
    })

  } //end of add
 
  updateContent(){

    
    console.log(this.log.jsonContent);
    
    this.contentgetpostservice.updateFileContents(this.log.jsonContent)
    .subscribe((response)=>{
      console.log(response);
    })
  } //end of updateContent

    
  editField: string;
    updateList(id :number ,data:string,event:any){

      const editField = event.target.textContent;
      event.target.textContent=editField;
      this.log.jsonContent[id][data] = editField;
      this.editField='';

    } //end of updateList


} //end of class


