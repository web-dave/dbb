import { Component, OnInit } from "@angular/core";
import { BookService } from "../shared/book.service";
import { ActivatedRoute } from "@angular/router";
import { IBook } from "../shared/Ibook";

@Component({
  selector: "book-details",
  templateUrl: "./book-details.component.html",
  styleUrls: ["./book-details.component.scss"]
})
export class BookDetailsComponent implements OnInit {
  book: IBook;
  constructor(private service: BookService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.service.getBook(p["isbn"])
      .subscribe(b => (this.book = b));
    });

    // this.service
    //   .getBook(this.route.snapshot.params["isbn"])
    //   .subscribe(b => (this.book = b));
  }
}
