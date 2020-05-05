import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { DataColorService } from '../../services/data-color.service';
import { Colour, DataApi } from '../../services/colors';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewChecked {
  showColors: boolean;
  showCopied: boolean;
  colorsToShow: Colour[];
  page = 1;
  constructor(private colorService: DataColorService) { }

  ngOnInit(): void {
    this.callApi(this.page);
  }

  ngAfterViewChecked() {

  }

  pasePage(page: number) {
    this.page = page;
    if (this.page !== 1) {
      this.callApi(this.page);
    } else {
      this.callApi();
    }
  }

  callApi(page?: number) {
    if (page) {
      this.callApiWithPages(page);
    } else {
      this.colorService.getColors().subscribe((data: DataApi) => {
        if (data.data.length > 0) {
          this.showColors = true;
          this.colorsToShow = data.data;
        }
      });
    }
  }

  callApiWithPages(page: number) {
    this.colorService.getColors(page).subscribe((data: DataApi) => {
      if (data.data.length > 0) {
        this.showColors = true;
        this.colorsToShow = data.data;
      } else {
        console.log('Data vacía de colores');
      }
    });
  }

}
