import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import { HomeComponent } from './home/home.component';
import { ParametreComponent } from './parametre/parametre.component';
import { GuideListComponent } from './guide/guide-list/guide-list.component';
import { PlayQuizComponent } from './quizzes/play-quiz/play-quiz.component';

const routes: Routes = [
    {path: 'quiz-list', component: QuizListComponent},
    {path: 'edit-quiz/:id', component: EditQuizComponent},
    {path: 'home', component: HomeComponent},
    {path: 'parametre', component: ParametreComponent},
    {path: 'guide-list', component: GuideListComponent},
    {path: 'play-quiz/:id', component: PlayQuizComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
