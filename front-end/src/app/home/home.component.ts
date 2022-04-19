import { Component } from '@angular/core';
import { ParamService} from '../../services/parametre.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(public paramService: ParamService) { }
}
