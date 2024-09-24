import { Component, Input } from '@angular/core';

@Component({
  selector: 'why-us-card',
  templateUrl: './why-us-card.component.html',
  styleUrls: ['./why-us-card.component.css']
})
export class WhyUsCardComponent {
  @Input() image: string = '';
  @Input() title: string = 'Title';
  @Input() text: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
}
