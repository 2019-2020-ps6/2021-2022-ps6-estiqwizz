import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import { HomeComponent } from './home/home.component';
import { ParametreComponent } from './parametre/parametre.component';
import { GuideListComponent } from './guide/guide-list/guide-list.component';
import { QuizFormComponent } from './quizzes/quiz-form/quiz-form.component';

const routes: Routes = [
    {path: 'quiz-list', component: QuizListComponent},
    {path: 'edit-quiz/:id', component: EditQuizComponent},
    {path: 'home', component: HomeComponent},
    {path: 'parametre', component: ParametreComponent},
    {path: 'quiz-form', component: QuizFormComponent},
    {path: 'guide-list', component: GuideListComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
