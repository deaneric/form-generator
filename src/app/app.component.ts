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

  formBuilder = new NgFormBuilder();
  resultHtml: SafeHtml;
  textHtml = '';  
  showOutput = false;

  constructor(private sanitizer: DomSanitizer) {    
    let result = this.formBuilder.getTemplateForm(this.objectArray);    
    this.resultHtml = this.sanitizer.bypassSecurityTrustHtml(result);    
    this.showOutput = true;
    this.textHtml = result;
  }


}
