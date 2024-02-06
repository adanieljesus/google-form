import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GformServiceService } from '../service/gform-service.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  filter_source_type_value = null;
  questions:any;
  constructor(private _gormservice: GformServiceService,
private router:Router
  ) { }
  ngOnInit(): void {
    
  this.questions = this._gormservice.getQuestionsData();
  }
  
  currentQuestionNo: number = 0;
  userAnswers: { [key: number]: string } = {};
  answer = '';
  selectedIndex = '';

  optionClicked(options:any, questionIndex:any) {
    this.userAnswers[questionIndex] = options;
  }

  submitAnswers() {
    this.selectedIndex = '';
    console.log('User Answers:', this.userAnswers);
    if (this.currentQuestionNo +1< this.questions.length) {
      this.currentQuestionNo++;
    }
    else
    {
      this._gormservice.userAnswer = this.userAnswers;
      this.router.navigateByUrl('/submit');
    }
  }
}
