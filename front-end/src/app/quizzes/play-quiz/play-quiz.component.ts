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

  constructor(private route: ActivatedRoute, private quizService: QuizService) {
    this.quizService.quizSelected$.subscribe((quiz) => this.quiz = quiz);
   }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.setSelectedQuiz(id);
  }

}
