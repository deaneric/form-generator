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
    let result = this.formBuilder.getTemplateForm(this.objectArray);
    this.resultHtml = this.sanitizer.bypassSecurityTrustHtml(result);
    this.showOutput = true;
    this.textHtml = result;
  }

  onLogin(form: NgForm) {
    console.log("XXXX", form);

  }

  copyText(data) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = data;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    alert("Code is copied to clipboard.")
  }


}
