import { Component, OnInit, OnDestroy } from "@angular/core";
import { IBook } from "../shared/Ibook";
import { BookService } from "../shared/book.service";
import { Subscription } from "rxjs";

@Component({
  selector: "book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.scss"]
})
export class BookListComponent implements OnInit, OnDestroy {
  books: IBook[];
  sub: Subscription;

  constructor(private service: BookService) {}

  ngOnInit() {
    this.sub = this.service.getBooks().subscribe(b => (this.books = b));
  }
  ngOnDestroy(): void {
    console.log(this.sub);
    this.sub.unsubscribe();
  }
}
