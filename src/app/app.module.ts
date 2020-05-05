import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ColorTableComponent } from './components/color-table/color-table.component';
import { CopiedComponent } from './components/copied/copied.component';

import { DataColorService } from './services/data-color.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ColorTableComponent,
    CopiedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [DataColorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
