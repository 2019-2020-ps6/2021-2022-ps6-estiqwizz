import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ParamService} from '../../../services/parametre.service';
import { CONFIG_LIST } from 'src/mocks/config-list.mock';
import {Config} from '../../../models/config.model';


@Component({
  selector: 'app-config-page',
  templateUrl: './startConfig.component.html',
  styleUrls: ['./startConfig.component.scss']
})
export class StartConfigComponent implements OnInit {

    public configList: Config[] = CONFIG_LIST;

    constructor(private route: Router, public paramService: ParamService ) { }

    ngOnInit() { }
    
}
