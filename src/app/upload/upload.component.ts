import { Component, OnInit, Input } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

const uri = 'http://localhost:3000/api/upload';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  public uploader:FileUploader = new FileUploader({url: uri, itemAlias: 'csv'});
  
  constructor() { }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item:any, response: any, status:any, headers:any) => {
      console.log("FileUpload:uploaded:", item, status, response);
    };
  }

}
