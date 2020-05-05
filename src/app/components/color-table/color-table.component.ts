import { Component, OnInit, Input } from '@angular/core';
import { Colour } from '../../services/colors';
@Component({
  selector: 'app-color-table',
  templateUrl: './color-table.component.html',
  styleUrls: ['./color-table.component.css']
})
export class ColorTableComponent implements OnInit {
  localeColor: Colour[];
  @Input () set color(data: Colour[]) {
    if (data) {
      this.localeColor = data;
      console.log(this.localeColor);
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
