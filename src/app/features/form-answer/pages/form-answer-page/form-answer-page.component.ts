import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-form-answer-page',
  templateUrl: './form-answer-page.component.html',
  styleUrls: ['./form-answer-page.component.scss']
})
export class FormAnswerPageComponent implements OnInit{

  listAnswers: any = [];
  constructor(private location: Location) {

  }
  ngOnInit(): void {
    this.getData();
  }

  getData = () => {
    const answers = sessionStorage.getItem('answers');
    this.listAnswers =  answers ? JSON.parse(answers) : '' ;
  }

  back() {
    this.location.back();
  }

}
