import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Colour } from '../../services/colors';

declare var $: any;

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

  @Output() hasCopied = new EventEmitter<boolean>();
  @Output() pickedColor = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    this.activeTooltip();
  }

  copyColor(colorCode: string) {
    // funcion que copia al clipboard
    const colorClicked = this.findColorObject(colorCode);
    const copyText = document.getElementById(`${colorClicked.id}`) as HTMLInputElement;
    copyText.select();
    document.execCommand('copy');
    // avisa al padre para que cambie la vista x el otro componente
    this.hasCopied.emit(true);
    this.pickedColor.emit(colorCode);
  }

  findColorObject(colorCode: string): Colour {
    const colorFound = this.localeColor.find((color) => {
      if (color.color === colorCode) {
        return color;
      }
    });
    return colorFound;
  }

 activeTooltip() {
    $('[data-toggle="tooltip"]').tooltip();
  }

}
