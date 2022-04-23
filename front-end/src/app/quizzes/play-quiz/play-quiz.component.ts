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
  public end = false;
  public explanation = false;
  public isCorrectCurrentQuestion = false;
  public currentPourcentageBonneReponse = 0;
  public globalPourcentageBonneReponse = 0;

  constructor(private route: ActivatedRoute, private quizService: QuizService, public paramService: ParamService) {
    this.quizService.quizSelected$.subscribe((quiz) => this.quiz = quiz);
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.setSelectedQuiz(id);
  }

  suivant() {
    this.explanation = false;
    this.i++;
    if (this.isCorrectCurrentQuestion) { this.score++; }
    if (this.i === this.quiz.questions.length) {
      const body =  {
        globalGoodAnswer: this.quiz.globalGoodAnswer + this.score,
        globalBadAnswer: this.quiz.globalBadAnswer + this.quiz.questions.length - this.score
      };
      this.quizService.updateQuiz(this.quiz, body);
      this.currentPourcentageBonneReponse = Math.round(this.score / this.quiz.questions.length * 100);
      const globalNbAnswers = this.quiz.globalGoodAnswer + this.quiz.globalBadAnswer;
      if (globalNbAnswers > 0) {
        this.globalPourcentageBonneReponse = Math.round(this.quiz.globalGoodAnswer / (globalNbAnswers) * 100);
      }
      this.end = true;
    }
  }

  displayExplanation(isCorrect: boolean) {
    this.explanation = true;
    this.isCorrectCurrentQuestion = isCorrect;
  }
}
