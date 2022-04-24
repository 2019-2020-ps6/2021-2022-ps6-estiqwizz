import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../../../services/quiz.service';
import { Quiz } from '../../../models/quiz.model';
import { ParamService } from '../../../services/parametre.service';

@Component({
  selector: 'app-quiz-theme-list',
  templateUrl: './quiz-theme-list.component.html',
  styleUrls: ['./quiz-theme-list.component.scss']
})
export class QuizThemeListComponent implements OnInit {

  public quizList: Quiz[] = [];
  public themeList: String[] = [];

  constructor(private router: Router, public quizService: QuizService, public paramService: ParamService) {
    this.quizService.quizzes$.subscribe((quizzes: Quiz[]) => {
      this.quizList = quizzes;
    });
    this.themeList = this.getThemeList(this.quizList);
    console.log(this.themeList);
    console.log(this.quizList);
  }

  ngOnInit() {
  }
  
  ngOnChanges(quizList: Quiz[]) {
    this.themeList = this.getThemeList(this.quizList);
    console.log(this.themeList);
    console.log(this.quizList);
  }

  getThemeList(quizList: Quiz[]) {
    const themeList: String[] = [];
    quizList.forEach(quiz => {
      if (!this.containsTheme(quiz.theme, themeList)) {
        themeList.push(quiz.theme);
      }
    });
    return themeList;
  }

  containsTheme(theme: String, quizList: String[]) {
    var i;
    for (i = 0; i < quizList.length; i++) {
        if (quizList[i] === theme) {
            return true;
        }
    }
    return false;
  }
}
