import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { QuizComponent } from './quizzes/quiz/quiz.component';
import { HeaderComponent } from './header/header.component';
import { QuizFormComponent } from './quizzes/quiz-form/quiz-form.component';
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import { QuestionListComponent } from './questions/question-list/question-list.component';
import { QuestionFormComponent } from './questions/question-form/question-form.component';
import { QuestionComponent } from './questions/question/question.component';
import { HomeComponent } from './home/home.component';
import { ParametreComponent } from './parametre/parametre.component';
import { GuideListComponent } from './guides/guide-list/guide-list.component';
import { GuideComponent } from './guides/guide/guide.component';
import { PlayQuizComponent } from './quizzes/play-quiz/play-quiz.component';
import { ResultQuizComponent } from './quizzes/result-quiz/result-quiz.component';
import { ShowGuideComponent } from './guides/show-guide/show-guide.component';


@NgModule({
  declarations: [
    AppComponent,
    QuizListComponent,
    QuizComponent,
    HeaderComponent,
    QuizFormComponent,
    EditQuizComponent,
    QuestionListComponent,
    QuestionFormComponent,
    QuestionComponent,
    HomeComponent,
    ParametreComponent,
    GuideListComponent,
    PlayQuizComponent,
    ResultQuizComponent,
    GuideComponent,
    ShowGuideComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
