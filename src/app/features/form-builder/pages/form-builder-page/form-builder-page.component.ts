import { DOCUMENT } from '@angular/common';
import { Component, ContentChild, ElementRef, Inject, OnInit, Renderer2, TemplateRef, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TYPE_QUESTION } from 'src/app/core/contants/type-question';
import { ModalService } from 'src/app/core/services/modal/modal.service';

@Component({
  selector: 'app-form-builder-page',
  templateUrl: './form-builder-page.component.html',
  styleUrls: ['./form-builder-page.component.scss']
})

export class FormBuilderPageComponent implements OnInit{

  @ViewChild('options') optionsElement: ElementRef = {} as ElementRef;
  vcr = inject(ViewContainerRef);

  @ContentChild(TemplateRef) template = {} as ElementRef;

  formQuestion: FormGroup = new FormGroup({});
  optionList = '';
  numberOption = 0;
  listQuestion: any = {};

  TYPE_QUESTION = TYPE_QUESTION;
  formArray: FormArray<FormGroup> = new FormArray<FormGroup>([]); 

  constructor(
    private formBuilder: FormBuilder,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private modalService: ModalService,
  ){}
  ngOnInit(): void {
    // this.formArray.insert(this.formQuestion)
    // this.formArray = this.formBuilder.array([
    //   this.formBuilder.group({
    //     question: [''],
    //     answer: ['']
    //   })
      
    // ])

    // this.insertFormGroup();
  }

  // insertFormGroup(data: any) {
  //   this.formArray.push( this.formBuilder.group({
  //     question: [data.question],
  //     answer: [''],
  //     options: [data.options],
  //     isRequired: [data.isRequired],
  //     isOther: [data.isOther],
  //     isType: [data.type]
  //   }));

  //   console.log(this.formArray);

  // }


  onSubmit = (data : any) => {
    console.log(data);
    // this.listQuestion.push(data);
    this.listQuestion = data;
    this.modalService.close();
    // this.insertFormGroup(data)

  }

  openModal(): void {
    this.modalService.open();
}

  navigateAnswerPage(data: any) {
    sessionStorage.setItem('answers', JSON.stringify(data));
    this.router.navigate(['/answer']);
  }
}

