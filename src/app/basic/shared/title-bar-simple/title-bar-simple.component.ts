import { Component, Input } from '@angular/core';

@Component({
  selector: 'title-bar-simple',
  templateUrl: './title-bar-simple.component.html',
  styleUrl: './title-bar-simple.component.css'
})
export class TitleBarSimpleComponent {
   @Input() title: string = 'default title'
}
