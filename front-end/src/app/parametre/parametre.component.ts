import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.scss']
})
export class ParametreComponent {

  public LIST_DALTO: string[] = ['Normal', 'Deutéranopie', 'Protanopie', 'Tritanopie'];

  public LIST_ECRITURE: string[] = ['Normal', 'Grand'];

  public LIST_SEPARATION: string[] = ['Normal', 'Grand'];

  public tailleForm: FormGroup;
  public sepForm: FormGroup;
  public daltForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.daltForm = this.formBuilder.group({ choix: ['Normal'] });
    this.tailleForm = this.formBuilder.group({ choix: ['Normal'] });
    this.sepForm = this.formBuilder.group({ choix: ['Normal'] });
  }

  setDalto() {}
  setTaille() {}
  setSep() {}
}
