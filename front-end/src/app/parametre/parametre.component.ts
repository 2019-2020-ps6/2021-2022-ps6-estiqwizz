import { Component } from '@angular/core';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.scss']
})
export class ParametreComponent {

  public LIST_DALTO: string[] = ['Normal', 'Deutéranopie', 'Protanopie', 'Tritanopie'];

  public LIST_ECRITURE: string[] = ['Normal', 'Grand'];

  public LIST_SEPARATION: string[] = ['Normal', 'Grand'];

  public LIST_IMAGE: string[] = ['Avec', 'Sans'];

}
