import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, EventEmitter, Inject, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TYPE_QUESTION } from 'src/app/core/contants/type-question';
import { ModalService } from 'src/app/core/services/modal/modal.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {

  @ViewChild('options') optionsElement: ElementRef = {} as ElementRef;
  @Output() addQuestion = new EventEmitter<any>(); 

  formQuestion: FormGroup = new FormGroup({});
  optionList = '';
  numberOption = 0;
  listQuestion: any = [];

  TYPE_QUESTION = TYPE_QUESTION;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
  ){}
  ngOnInit(): void {
      this.initFormQuestion();
  }

  initFormQuestion = () => {
    this.formQuestion = this.formBuilder.group({
      question: ['', Validators.required],
      type: [this.TYPE_QUESTION[0].value, Validators.required],
      options: [[]],
      isRequired: [false],
      isOther: [false],
    })
  }

  addOption = () => {
    this.numberOption = this.numberOption + 1;
    if (this.numberOption < 5) {
      const input: HTMLParagraphElement = this.renderer.createElement('input');
      input.classList.add('form-control');
      input.classList.add('m-1');
  
      input.setAttribute('id', 'input' + this.numberOption);
      this.renderer.appendChild(this.optionsElement.nativeElement, input);
    }
  }

  getValueOption = () => {
    const values = [];
    for (let i = 0; i < this.numberOption; i ++) {
      const el = this.document.getElementById(`input${i + 1}`) as HTMLInputElement;
     values.push(el.value);
    }
    return values;
  }

  onSubmit = () => {
    const data: any = this.formQuestion.value;
    if(this.formQuestion.controls['type'].value == this.TYPE_QUESTION[1].value) {
      data.options = this.getValueOption();
    }

    this.listQuestion.push(data);
    this.formQuestion.reset();
    this.numberOption = 0;
    
    this.addQuestion.emit(data);
  }
}


