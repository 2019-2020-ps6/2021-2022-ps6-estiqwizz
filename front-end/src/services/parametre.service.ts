import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ParamService {

  public isTextBig = false;

  public isDalto = false;

  public typeDalto: string;

  public typeTaille: string;

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
      case 'Normal':
        return {goodAnswerNormal: !this.isDalto};
      case 'Deutéranopie':
      case 'Protanopie':
        return {goodAnswer: !this.isDalto , goodAnswerDeuterProta: this.isDalto};
      case 'Tritanopie':
        return {goodAnswer: !this.isDalto , goodAnswerTrita: this.isDalto};
    }
  }

  getDaltoBad() {
    switch (this.typeDalto) {
      case 'Normal':
        return {badAnswerNormal: !this.isDalto};
      case 'Deutéranopie':
      case 'Protanopie':
        return {badAnswer: !this.isDalto , badAnswerDeuterProta: this.isDalto};
      case 'Tritanopie':
        return {badAnswer: !this.isDalto , badAnswerTrita: this.isDalto};
    }
  }
  getTaille() {
    return {normalSize: !this.isTextBig , bigSize: this.isTextBig};
  }

  getBullshit() {
    return {parametre1: false , parametre2: true};
  }

}
