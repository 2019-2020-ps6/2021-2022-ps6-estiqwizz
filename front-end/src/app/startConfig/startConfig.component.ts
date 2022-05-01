import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ParamService} from '../../services/parametre.service';


@Component({
  selector: 'app-config-page',
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
        this.paramService.setDalto('Défaut');
        this.dalt();
    }

    setDmlaPres() {
        this.paramService.setDalto('Défaut');
        this.paramService.setTaille(true);
        this.paramService.setSep(true);
        this.navigate();
    }

    setDmlaDalt() {
        this.paramService.setDalto('Défaut');
        this.paramService.setTaille(false);
        this.paramService.setSep(true);
        this.dalt();
    }

    setPresDalt() {
        this.paramService.setDalto('Défaut');
        this.paramService.setTaille(true);
        this.paramService.setSep(false);
        this.dalt();
    }

    setDaltDaltDmla() {
        this.paramService.setDalto('Défaut');
        this.paramService.setTaille(true);
        this.paramService.setSep(true);
        this.dalt();
    }

    navigate() {
        this.route.navigate(['/home']);
    }

    dalt() {
        this.route.navigate(['/dalto']);
    }
}
