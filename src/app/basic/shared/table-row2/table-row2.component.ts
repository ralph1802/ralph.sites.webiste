import { Component, Input } from '@angular/core';

@Component({
  selector: 'table-row2',
  templateUrl: './table-row2.component.html',
  styleUrl: './table-row2.component.css'
})
export class TableRow2Component {
  @Input() image: string = '';
  @Input() title: string = 'Title';
  @Input() text: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
}
