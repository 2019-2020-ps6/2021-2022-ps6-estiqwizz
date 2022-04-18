import { Component, OnInit } from '@angular/core';
import { Guide } from '../../../models/guide.model';
import { GUIDE_LIST } from '../../../mocks/guide-list.mock';

@Component({
  selector: 'app-guide-list',
  templateUrl: './guide-list.component.html',
  styleUrls: ['./guide-list.component.scss']
})

export class GuideListComponent implements OnInit {

  public guideList: Guide[] = GUIDE_LIST;

  constructor() {
  }

  ngOnInit() {
  }

  guideSelected(selected: boolean) {
    console.log('event received from child:', selected);
  }
}
