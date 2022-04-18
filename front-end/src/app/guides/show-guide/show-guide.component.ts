import { Component, OnInit } from '@angular/core';
import { Guide } from 'src/models/guide.model';
import { ActivatedRoute } from '@angular/router';
import { GUIDE_LIST } from 'src/mocks/guide-list.mock';


@Component({
  selector: 'app-show-guide',
  templateUrl: './show-guide.component.html',
  styleUrls: ['./show-guide.component.scss']
})

export class ShowGuideComponent implements OnInit {
    guide: Guide;

    constructor(private route: ActivatedRoute) {
        const id = this.route.snapshot.paramMap.get('id');
        this.guide = GUIDE_LIST[id];
    }

    ngOnInit() {}
}
