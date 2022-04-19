import { Component, OnInit } from '@angular/core';
import {ParamService} from '../../services/parametre.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(public paramService: ParamService) { }

  ngOnInit() {
  }

}
