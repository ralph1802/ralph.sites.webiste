import { Component, Input } from '@angular/core';

@Component({
  selector: 'table-row1',
  templateUrl: './table-row1.component.html',
  styleUrl: './table-row1.component.css'
})
export class TableRow1Component {
  @Input() image: string = '';
  @Input() title: string = 'Title';
  @Input() text: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
}
