import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'config-page',
  templateUrl: './startConfig.component.html',
  styleUrls: ['./startConfig.component.scss']
})
export class StartConfigComponent implements OnInit {

    constructor(private route: Router) { }

    ngOnInit() { }

    setClas() {
        this.navigate();
    }

    setDmla() {
        this.navigate();
    }

    setPres() {
        this.navigate();
    }

    setDalt() {
        this.navigate();
    }

    navigate() {
        this.route.navigate(['/home']);
    }
}
