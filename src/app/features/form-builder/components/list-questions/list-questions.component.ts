import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TYPE_QUESTION } from 'src/app/core/contants/type-question';

@Component({
  selector: 'app-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.scss']
})
export class ListQuestionsComponent implements OnChanges, OnInit {

  @Input() listQuestion : any = {};
  @Output() answer = new EventEmitter<any>();
  TYPE_QUESTION = TYPE_QUESTION;
  // formArray: FormArray<FormGroup> = new FormArray<FormGroup>([]); 
  formGroup: FormGroup<any> = this.formBuilder.group({
    questions: this.formBuilder.array([])
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    
  }

  get questions() {
    return this.formGroup.controls["questions"] as FormArray;
  }

  // get options() {
    // return this.questions.controls['options'] as FormArray;
  // }
  // insertFormGroup(data: any) {
  //   this.formArray.push( this.formBuilder.group({
  //     question: [data.question],
  //     answer: [''],
  //     options: [data.options],
  //     isRequired: [data.isRequired],
  //     isOther: [data.isOther],
  //     isType: [data.type]
  //   }));

  //   console.log(this.formArray.value, data);
  // }

  addQuestion(data: any) {
    const optionForm = this.formBuilder.array([]) as FormArray;
    data.options.map((item: string, i: number) => {
      // const control = new FormGroup({
      //   [i]: new FormControl(item)
      // }) as FormGroup
      const control = new FormControl(item)

      optionForm.push(control);

    })

    const questionForm = this.formBuilder.group({
      question: new FormControl(data.question),
      answer: [''],
      options: optionForm,
      isRequired: [data.isRequired],
      isOther: [data.isOther],
      type: [data.type]
    });

    // questionForm.addControl('options', optionForm);

    this.questions.push(questionForm);
    console.log(this.formGroup)
  }

  createFormOption (options: any) {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log('hiii',changes);
      console.log(this.formGroup)

      if (changes['listQuestion'].currentValue && Object.keys(this.listQuestion).length > 0 ){
        this.addQuestion(this.listQuestion);
      }
  }

  review() {
    this.answer.emit(this.formGroup.value.questions);
  }

}
