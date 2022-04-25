import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ParamService {

  public isTextBig = false;

  public isDalto = false;

  public typeDalto = 'Défaut';

  public typeTaille: string;

  public isSepGrand = false;

  public typeSeparation: string;

  setTaille(textBig: boolean) {
    if (textBig) {
      this.typeTaille = 'Grand';
    } else {
      this.typeTaille = 'Normal';
    }
    this.isTextBig = textBig;
  }

  setDalto(dalto: string) {
    this.typeDalto = dalto;
    this.isDalto = dalto !== 'Normal';
  }

  getDaltoGood() {
    switch (this.typeDalto) {
      case 'Deutéranopie':
      case 'Protanopie':
        return {goodAnswerNormal: !this.isDalto , goodAnswerDeuterProta: this.isDalto};
      case 'Tritanopie':
        return {goodAnswerNormal: !this.isDalto , goodAnswerTrita: this.isDalto};
      default:
        return {goodAnswerNormal: true};
    }
  }

  getDaltoBad() {
    switch (this.typeDalto) {
      case 'Deutéranopie':
      case 'Protanopie':
        return {badAnswerNormal: !this.isDalto , badAnswerDeuterProta: this.isDalto};
      case 'Tritanopie':
        return {badAnswerNormal: !this.isDalto , badAnswerTrita: this.isDalto};
      default:
        // return {badAnswerNormal: !this.isDalto};
        return {badAnswerNormal: true};
    }
  }

  getTaille() {
    return {normalSize: !this.isTextBig , bigSize: this.isTextBig};
  }

  getBullshit() {
    return {parametre1: false , parametre2: true};
  }

  setSep(isSep: boolean) {
    if (isSep) {
      this.typeSeparation = 'Grand';
    } else {
      this.typeSeparation = 'Normal';
    }
    this.isSepGrand = isSep;
  }

  getSep() {
    return {normalSep: !this.isSepGrand , bigSep: this.isSepGrand};
  }
}
