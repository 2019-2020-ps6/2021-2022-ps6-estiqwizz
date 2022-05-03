import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import { HomeComponent } from './home/home.component';
import { ParametreComponent } from './parametre/parametre.component';
import { GuideListComponent } from './guides/guide-list/guide-list.component';
import { QuizFormComponent } from './quizzes/quiz-form/quiz-form.component';
import { PlayQuizComponent } from './quizzes/play-quiz/play-quiz.component';
import { ResultQuizComponent } from './quizzes/result-quiz/result-quiz.component';
import { ShowGuideComponent } from './guides/show-guide/show-guide.component';
import { QuizThemeListComponent } from './quizzes/quiz-theme-list/quiz-theme-list.component';
import { StartConfigComponent } from './configs/startConfig/startConfig.component';
import { DaltoChoiceComponent } from './daltoChoice/daltoChoice.component';

const routes: Routes = [
    {path: 'quiz-list', component: QuizListComponent},
    {path: 'edit-quiz/:id', component: EditQuizComponent},
    {path: 'home', component: HomeComponent},
    {path: 'parametre', component: ParametreComponent},
    {path: 'quiz-form', component: QuizFormComponent},
    {path: 'guide-list', component: GuideListComponent},
    {path: 'play-quiz/:id', component: PlayQuizComponent},
    {path: 'result-quiz/:id', component: ResultQuizComponent},
    {path: 'guide/:id', component: ShowGuideComponent},
    {path: 'quiz-theme-list', component: QuizThemeListComponent},
    {path: 'start-config', component: StartConfigComponent},
    {path: 'dalto', component: DaltoChoiceComponent},
    {path: '**', redirectTo: 'start-config', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
