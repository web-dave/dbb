import { Component, OnInit } from "@angular/core";
import { IBook } from "../shared/Ibook";
import { BookService } from "../shared/book.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "book-edit",
  templateUrl: "./book-edit.component.html",
  styleUrls: ["./book-edit.component.scss"]
})
export class BookEditComponent implements OnInit {
  book: IBook;
  constructor(
    private service: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  save() {
    console.table(this.book);
    this.service.saveBook(this.book).subscribe(b => {
      this.router.navigate([".."], { relativeTo: this.route });
    });
  }
  ngOnInit() {
    this.service
      .getBook(this.route.snapshot.params["isbn"])
      .subscribe(b => (this.book = b));
  }
}
