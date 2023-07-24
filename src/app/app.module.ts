import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LibraryComponent } from './library/library.component';
import { BookService } from './book.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  FormControl,
  FormGroup,
  FormArray,
  ReactiveFormsModule,
} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [AppComponent, LibraryComponent],
  providers: [BookService],
  bootstrap: [AppComponent],
})
export class AppModule {}
