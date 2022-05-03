import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ParamService} from '../../../services/parametre.service';
import {Config} from '../../../models/config.model';

@Component({
  selector: 'app-config-element',
  templateUrl: './config-element.component.html',
  styleUrls: ['./config-element.component.scss']
})
export class ConfigElementComponent implements OnInit {

    @Input()
    config: Config;


    constructor(private route: Router, public paramService: ParamService ) { }

    ngOnInit() { }

    navigate(navToDalto: boolean) {
        navToDalto ? this.route.navigate(['/dalto']) : this.route.navigate(['/home']);
    }

    setConfig() {
        this.paramService.setDalto('Défaut');
        this.paramService.setTaille(this.config.taille);
        this.paramService.setSep(this.config.separation);
        this.navigate(this.config.dalto);
    }
}
