import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizService } from '../../../services/quiz.service';
import { Quiz } from '../../../models/quiz.model';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})
export class QuizFormComponent implements OnInit {

  // Note: We are using here ReactiveForms to create our form. Be careful when you look for some documentation to
  // avoid TemplateDrivenForm (another type of form)

  /**
   * QuizForm: Object which manages the form in our component.
   * More information about Reactive Forms: https://angular.io/guide/reactive-forms#step-1-creating-a-formgroup-instance
   */
  public quizForm: FormGroup;
  public quizList: Quiz[] = [];

  constructor(public formBuilder: FormBuilder, public quizService: QuizService, private router: Router) {
    this.quizForm = this.formBuilder.group({
      name: [''],
      theme: ['']
    });
    this.quizService.quizzes$.subscribe((quizzes: Quiz[]) => {
      this.quizList = quizzes;
    });
    // You can also add validators to your inputs such as required, maxlength or even create your own validator!
    // More information: https://angular.io/guide/reactive-forms#simple-form-validation
    // Advanced validation: https://angular.io/guide/form-validation#reactive-form-validation
  }

  ngOnInit() {
  }

  addQuiz() {
    // We retrieve here the quiz object from the quizForm and we cast the type "as Quiz".
    const quizToCreate: Quiz = this.quizForm.getRawValue() as Quiz;
    quizToCreate.globalBadAnswer = 0;
    quizToCreate.globalGoodAnswer = 0;
    this.quizService.addQuiz(quizToCreate);
  }

  quizSelected(selected: boolean) {
    console.log('event received from child:', selected);
  }

  editQuiz(quiz: Quiz) {
    this.router.navigate(['/edit-quiz/' + quiz.name]);
  }

  deleteQuiz(quiz: Quiz) {
    this.quizService.deleteQuiz(quiz);
  }

}
