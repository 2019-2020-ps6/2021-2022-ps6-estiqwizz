import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Guide } from '../../../models/guide.model';
import { GUIDE_LIST } from '../../../mocks/guide-list.mock';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})

export class GuideComponent implements OnInit {

  @Input()
  guide: Guide;

  @Output()
  guideSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
    this.guide = GUIDE_LIST[0];
  }

  ngOnInit() {
  }

  selectGuide() {
    this.guideSelected.emit(true);
  }
}
