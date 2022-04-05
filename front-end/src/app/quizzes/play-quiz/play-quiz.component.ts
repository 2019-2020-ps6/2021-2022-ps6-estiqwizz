import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';
import { QuizService } from 'src/services/quiz.service';
import { Question } from '../../../models/question.model';
import {ParamService} from '../../../services/parametre.service';

@Component({
  selector: 'app-play-quiz',
  templateUrl: './play-quiz.component.html',
  styleUrls: ['./play-quiz.component.scss']
})
export class PlayQuizComponent implements OnInit {

  public quiz: Quiz;

  public i = 0;
  public score = 0;
  public nbQuestions: number;
  public end = false;
  public explanation = false;
  public isCorrectCurrentQuestion = false;

  constructor(private route: ActivatedRoute, private quizService: QuizService, public paramService: ParamService) {
    this.quizService.quizSelected$.subscribe((quiz) => this.quiz = quiz);
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.setSelectedQuiz(id);
    this.nbQuestions = this.quiz.questions.length;
    console.log(this.nbQuestions);
  }

  suivant() {
    this.explanation = false;
    this.i++;
    if (this.isCorrectCurrentQuestion) { this.score++; }
    if (this.i === this.quiz.questions.length) { this.end = true; }
  }

  displayExplanation(isCorrect: boolean) {
    this.explanation = true;
    this.isCorrectCurrentQuestion = isCorrect;
  }
}
