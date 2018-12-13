import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { BookService } from "../shared/book.service";

@Component({
  selector: "book-new",
  templateUrl: "./book-new.component.html",
  styleUrls: ["./book-new.component.scss"]
})
export class BookNewComponent implements OnInit {
  form: FormGroup;

  constructor(private builder: FormBuilder, private service: BookService) {}

  ngOnInit() {
    this.form = this.builder.group({
      title: ["", Validators.required],
      author: ["", Validators.required],
      subtitle: [""],
      abstract: [""],
      numPages: [null],
      publisher: this.builder.group({
        name: [""],
        url: [""]
      })
    });
  }
  save() {
    this.service.createBook(this.form.value).subscribe();
  }
}
