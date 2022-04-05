import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParamService {

  public isTextBig = false;

  setTaille(textBig: boolean) {
    this.isTextBig = textBig;
  }

  getTaille() {
    return {parametre1: !this.isTextBig , parametre2: this.isTextBig};
  }

}
