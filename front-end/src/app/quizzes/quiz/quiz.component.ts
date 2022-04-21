import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quiz } from '../../../models/quiz.model';
import {ParamService} from '../../../services/parametre.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  @Input()
  quiz: Quiz;

  @Output()
  quizSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  editQuiz: EventEmitter<Quiz> = new EventEmitter<Quiz>();

  @Output()
  deleteQuiz: EventEmitter<Quiz> = new EventEmitter<Quiz>();

  constructor(public paramService: ParamService, public router: Router) {
  }

  ngOnInit() {
  }

  selectQuiz() {
    this.quizSelected.emit(true);
  }

  edit() {
    this.editQuiz.emit(this.quiz);
  }

  delete() {
    this.deleteQuiz.emit(this.quiz);
  }
}
