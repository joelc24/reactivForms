import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  public formParent: FormGroup = new FormGroup({});//TODO: Parent Form Declaration
  count = true;

  constructor() { }

  ngOnInit(): void {
    this.initFormParent();
  }

  //TODO: FormGroup -> [FormArray, FormControls, FormGroup]
  initFormParent(): void {
    this.formParent = new FormGroup({
      name: new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)])),
      conct_exp: new FormArray([], [Validators.required]),
      technologies: new FormArray([]),
    });
  }

  //TODO: Initialize Form Child
  initFormChild(): FormGroup {
    return new FormGroup({
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      telefono: new FormControl('', Validators.compose([Validators.required, Validators.minLength(10)])),
      expYear: new FormControl('', [Validators.required]),
      cargo: new FormControl('', [Validators.required]),
    })
  }

  //TODO: inicializar form cargo
  initFormTechnoclogies(): FormGroup {
    return new FormGroup({
      "C#": new FormControl(false),
      flutter: new FormControl(false),
      angular: new FormControl(false),
      vue: new FormControl(false),
      react: new FormControl(false),
    })
  }

  //TODO: Add new FormChild
  addFormChild(): void {
    const refFormChild = this.formParent.get('conct_exp') as FormArray;
    const refFormtech = this.formParent.get('technologies') as FormArray;
    refFormChild.push(this.initFormChild());
    refFormtech.push(this.initFormTechnoclogies());
    this.count = false;
  }


  //TODO: Obtener referencia a un control
  getControl(controlName: string, form: any): any {
    return form.get(controlName);
  }

  submit(): void {
    console.log(this.formParent.value);
  }

  deleteFormCHild(index: number): void {
    this.formParent.get('name')!.setValue('');
    const refFormChild = this.formParent.get('conct_exp') as FormArray;
    const refFormtech = this.formParent.get('technologies') as FormArray;
    refFormChild.removeAt(index);
    refFormtech.removeAt(index);
    this.count = true;
  }
  
}


