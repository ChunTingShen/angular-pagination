import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Todo } from '../book';
import { debounceTime, filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
})
export class LibraryComponent implements OnInit {
  constructor(private book: BookService) {}

  todoArray: Todo[] = [];
  options: number[] = [5, 10, 25];
  itemsPerPage: number = 5;
  currentItem: number = 0;
  currentPage: number = 1;
  currentShowingItems: number[] = [1, 5];

  totalPages: number = 7; // set to inital 7
  totalPagesArray: number[] = []; // in case pages < 7, build totalPagesArray
  totalItems: number = 200;

  ngOnInit() {
    this.getItem();
  }

  getItem() {
    const newTodos = this.book.getTodos().subscribe((val: Todo[]) => {
      this.todoArray = [];
      this.totalItems = val.length;
      this.totalPages = val.length / this.itemsPerPage;
      this.totalPagesArray = [...Array(this.totalPages).keys()].map(
        (x) => x + 1
      );
      const loop: number = Number(this.currentItem) + Number(this.itemsPerPage);
      console.log('Loop: ', loop);

      console.log('Total Pages: ', this.totalPages);
      console.log('Item Per Page is: ', this.itemsPerPage);
      for (let i = this.currentItem; i < Math.min(loop, this.totalItems); i++) {
        if (val[i]) {
          console.log(val[i]);
          this.todoArray.push(val[i]);
        }
      }
    });
    // console.clear();
  }

  onSelection(event: any) {
    // console.log('Change items per page to:', event);
    // console.log('Current Item is: ', this.currentItem);
    // console.log(
    //   'Current Page is: ',
    //   Math.floor(this.currentItem / this.itemsPerPage) + 1
    // );
    // this.updateCurrentPage();

    // change to first page:

    this.currentItem = 0;
    this.currentPage = 1;
    this.updateCurrentPage();

    this.getItem();
  }

  onFirstPage() {
    console.log('to first page');
    this.currentItem = 0;
    this.currentPage = 1;
    this.updateCurrentPage();

    this.getItem();
  }

  onNextPage() {
    console.log('to next page');

    if (this.currentItem + Number(this.itemsPerPage) >= this.totalItems) {
      console.log('Warning: index overflow');
    } else {
      this.currentItem += Number(this.itemsPerPage);
      this.currentPage += 1;
      this.updateCurrentPage();

      this.getItem();
    }
  }
  onPrevPage() {
    console.log('to previous page');

    if (this.currentItem - this.itemsPerPage < 0) {
      console.log('Warning: index less than 0');
    } else {
      this.currentItem -= Number(this.itemsPerPage);
      this.currentPage -= 1;
      this.updateCurrentPage();

      this.getItem();
    }
  }
  onLastPage() {
    console.log('to last page');
    console.log((this.totalPages - 1) * this.itemsPerPage);
    this.currentItem = (this.totalPages - 1) * this.itemsPerPage;
    this.currentPage = this.totalPages;
    this.updateCurrentPage();

    this.getItem();
  }

  onCustomPage(page: number) {
    console.log('to last page');
    console.log((page - 1) * this.itemsPerPage);
    this.currentItem = (page - 1) * this.itemsPerPage;
    this.currentPage = this.totalPages;
    this.updateCurrentPage();
    this.getItem();
  }

  updateCurrentPage() {
    this.currentShowingItems = [
      this.currentItem + 1,
      Math.min(
        Number(this.currentItem) + Number(this.itemsPerPage),
        this.totalItems
      ),
    ];
  }

  onClear() {
    console.clear();
  }
}
