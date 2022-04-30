import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import {ParamService} from '../../services/parametre.service';
import {FormGroup, FormBuilder} from '@angular/forms';


@Component({
  selector: 'config-page',
  templateUrl: './startConfig.component.html',
  styleUrls: ['./startConfig.component.scss']
})
export class StartConfigComponent implements OnInit {


    constructor(private route: Router, public paramService: ParamService ) { }

    ngOnInit() { }

    setClas() {
        this.paramService.setSep(false);
        this.paramService.setTaille(false);
        this.paramService.setDalto('Défaut');
        this.navigate();
    }

    setDmla() {
        this.paramService.setTaille(false);
        this.paramService.setDalto('Défaut');
        this.paramService.setSep(true);
        this.navigate();
    }

    setPres() {
        this.paramService.setDalto('Défaut');
        this.paramService.setTaille(true);
        this.paramService.setSep(false);
        this.navigate();
    }

    setDalt() {
        this.paramService.setSep(false);
        this.paramService.setTaille(false);
        this.paramService.setDalto('Deutéranopie');
        this.navigate();
    }

    navigate() {
        this.route.navigate(['/home']);
    }
}
