import { Component, Input } from '@angular/core';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  @Input() question: string = '';
  @Input() answer: string = '';

  isAnswerVisible: boolean = false;

  toggleAnswer() {
    this.isAnswerVisible = !this.isAnswerVisible;
  }

  getIconPath(): string {
    return this.isAnswerVisible ? '/assets/images/-.svg' : '/assets/images/+.svg';
  }
}
