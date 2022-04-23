import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {ParamService} from '../../services/parametre.service';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.scss']
})
export class ParametreComponent implements OnInit {

  public LIST_DALTO: string[] = ['Normal', 'Deutéranopie', 'Protanopie', 'Tritanopie'];

  public LIST_ECRITURE: string[] = ['Moyen', 'Grand'];

  public LIST_SEPARATION: string[] = ['Moyen', 'Grand'];

  public tailleForm: FormGroup;
  public sepForm: FormGroup;
  public daltForm: FormGroup;

  public textBig = false;
  public SepBig = false;

  constructor(public formBuilder: FormBuilder, public paramService: ParamService) {
    this.daltForm = this.formBuilder.group({
      choix: [(this.paramService.typeDalto === undefined) ? 'Normal' : this.paramService.typeDalto]
    });
    this.tailleForm = this.formBuilder.group({
      choix: [(this.paramService.typeTaille === undefined) ? 'Moyen' : this.paramService.typeTaille]
    });
    this.sepForm = this.formBuilder.group({
      choix: [(this.paramService.typeSeparation === undefined) ? 'Moyen' : this.paramService.typeSeparation]
    });
  }

  ngOnInit() {
    this.paramService.typeDalto = 'Normal';
  }

  setDalto() {
    const choixDalto = this.daltForm.getRawValue();
    this.paramService.setDalto(choixDalto.choix);
    alert('vous avez choisie l\'option daltonisme : ' + choixDalto.choix);
  }

  setTaille() {
    const choixTaille = this.tailleForm.getRawValue();
    console.log('clique a ete fait' , choixTaille);
    this.textBig = choixTaille.choix !== 'Moyen';
    this.paramService.setTaille(this.textBig);
  }

  getTaille() {
    return this.paramService.getTaille();
  }

  setSep() {
    const choixSep = this.sepForm.getRawValue();
    this.SepBig = choixSep.choix !== 'Moyen';
    this.paramService.setSep(this.SepBig);
    alert('vous avez choisie l\'option Separation : ' + choixSep.choix);
  }
}
