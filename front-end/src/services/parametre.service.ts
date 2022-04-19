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
        return {goodAnswer: !this.isDalto};
      case 'Deutéranopie':
        return {goodAnswer: !this.isDalto , goodAnswerDeteranopie: this.isDalto};
      /*case 'Protanopie':
        return {goodAnswer: !this.isDalto , goodAnswerDeteranopie: this.isDalto};
      case 'Tritanopie':
        return {goodAnswer: !this.isDalto , goodAnswerDeteranopie: this.isDalto};*/
    }
  }

  getDaltoBad() {
    switch (this.typeDalto) {
      case 'Normal':
        return {badAnswer: !this.isDalto};
      case 'Deutéranopie':
        return {badAnswer: !this.isDalto , badAnswerDeteranopie: this.isDalto};
      /*case 'Protanopie':
        return {badAnswer: !this.isDalto , badAnswerDeteranopie: this.isDalto};
      case 'Tritanopie':
        return {badAnswer: !this.isDalto , badAnswerDeteranopie: this.isDalto};*/
    }
  }
  getTaille() {
    return {parametre1: !this.isTextBig , parametre2: this.isTextBig};
  }

  getBullshit() {
    return {parametre1: false , parametre2: true};
  }

}
