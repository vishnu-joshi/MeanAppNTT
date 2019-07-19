import { Component, OnInit, Input } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  public uploader: FileUploader; // = new FileUploader({url: this.url, itemAlias: 'photo'});
  private _url: string;
  @Input() set url(value: string) {
    this._url = value;
    this.uploader = new FileUploader({url: this._url, itemAlias: 'file', autoUpload: true})
  }
  constructor() { }

  ngOnInit() {
  }

}
