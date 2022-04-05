import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';
import { QuizService } from 'src/services/quiz.service';
import { Question } from '../../../models/question.model';

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

  constructor(private route: ActivatedRoute, private quizService: QuizService) {
    this.quizService.quizSelected$.subscribe((quiz) => this.quiz = quiz);
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.setSelectedQuiz(id);
    this.nbQuestions = this.quiz.questions.length;
    console.log(this.nbQuestions);
  }

  suivant(isCorrect: boolean) {
    this.i++;
    if (isCorrect) { this.score++; }
    if (this.i === this.quiz.questions.length) { this.end = true; }
  }
}
