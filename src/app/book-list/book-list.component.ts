import { Component, OnInit } from "@angular/core";
import { IBook } from "../shared/Ibook";
import { BookService } from "../shared/book.service";

@Component({
  selector: "book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.scss"]
})
export class BookListComponent implements OnInit {
  books: IBook[];

  constructor(private service: BookService) {}

  ngOnInit() {
    this.books = this.service.getBooks();
  }
}
