import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
// import { Observable }    from 'rxjs/Observable';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-taxe',
  templateUrl: './taxe.component.html',
  styleUrls: ['./taxe.component.css']
})

export class TaxeComponent implements OnInit {

  
  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.setChangeValidate()
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'trimestre': [null,Validators.required],
      'annee': [null, Validators.required],
      'nuite': [null,Validators.required],
      'date':'',
      'redevable':'',
      'locale':''
    });
  }

  setChangeValidate() {
    this.formGroup.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate == '1') {
          this.formGroup.get('annee').setValidators(Validators.required);
          this.titleAlert = "";
        } else {
          this.formGroup.get('annee').setValidators(Validators.required);
        }
        this.formGroup.get('annee').updateValueAndValidity();
      }
    )
  }
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  get annee() {
    return this.formGroup.get('annee') as FormControl
  }

  getErrorTrimestre() {
    return this.formGroup.get('trimestre').hasError('required') ? 'Field is required': ''  }

  onSubmit(post) {
    this.post = post;
  }

}
