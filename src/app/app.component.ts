import { Component, OnInit } from '@angular/core';
import *  as  data from '../assets/data.json';

import { NgFormBuilder } from './ng-form-builder';
import { DomSanitizer, SafeUrl, SafeHtml } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular-form-builder';
  objectArray: any = (data as any).default;
  objectForm: any;

  formBuilder = new NgFormBuilder();
  resultHtml: SafeHtml;
  textHtml = '';
  showOutput = false;

  userName: string;
  userPassword: string;


  constructor(private sanitizer: DomSanitizer) {

    //console.log("OBJ:", this.objectArray);
    //for (let n = 0; n < this.objectArray.length; n++) {

    //  if (this.objectArray[n] !== "submit" && this.objectArray[n] !== "button" && this.objectArray[n] !== "reset") {

    //    console.log("ITEM:", this.objectArray[n])
    //    this.objectForm[this.objectArray.Name]
    //  }
    //}
    let result = this.formBuilder.getTemplateForm(this.objectArray);
    this.resultHtml = this.sanitizer.bypassSecurityTrustHtml(result);
    this.showOutput = true;
    this.textHtml = result;
  }

  onLogin(form: NgForm) {
    console.log("XXXX",form);
   
  }


}
