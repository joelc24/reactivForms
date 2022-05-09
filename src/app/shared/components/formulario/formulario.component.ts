import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IntegrantesService } from 'src/app/pages/integrantes/services/integrantes.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  public formParent: FormGroup = new FormGroup({});//TODO: Parent Form Declaration
  count = true;

  id : number = 0

  constructor(private service: IntegrantesService, private route: Router, private activateRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRouter.params.subscribe(params => {
      this.id = params['id'];
    })

    this.service.getIntegrante(this.id).subscribe(data => {
      this.formParent.patchValue(data);
    })
    this.initFormParent();
    this.addFormChild();
  }

  //TODO: FormGroup -> [FormArray, FormControls, FormGroup]
  initFormParent(): void {
    this.formParent = new FormGroup({
      id: new FormControl(''),
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
    this.service.updateIntegrante(this.formParent.value).subscribe(
      (data) => {
        console.log(data);
        this.route.navigate(['/list']);
      },
      error => { console.log('error->', error) })
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
