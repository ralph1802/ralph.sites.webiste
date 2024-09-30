import { Component, Input } from '@angular/core';

@Component({
  selector: 'title-bar-icon',
  templateUrl: './title-bar-icon.component.html',
  styleUrl: './title-bar-icon.component.css'
})
export class TitleBarIconComponent {
  @Input() title: string = 'default title'
}
