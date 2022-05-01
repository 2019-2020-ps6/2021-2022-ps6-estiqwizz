import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ParamService} from '../../services/parametre.service';

@Component({
    selector: 'app-dalto-page',
    templateUrl: './daltoChoice.component.html',
    styleUrls: ['./daltoChoice.component.scss']
})

export class DaltoChoiceComponent implements OnInit {

    constructor(private route: Router, public paramService: ParamService ) { }

    ngOnInit() { }

    setDalt(type: number) {
        switch ( type ) {
            case 0: {
                this.paramService.setDalto('Défaut');
                break;
            }
            case 1: {
                this.paramService.setDalto('Deutéranopie');
                break;
            }
            case 2: {
                this.paramService.setDalto('Tritanopie');
                break;
            }
        }
        this.navigate();
    }

    navigate() {
        this.route.navigate(['/home']);
    }
}
