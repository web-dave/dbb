import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { BookRoutingModule } from "./book-routing.module";
import { BookComponent } from "./book/book.component";
import { BookListComponent } from "./book-list/book-list.component";
import { BookDetailsComponent } from "./book-details/book-details.component";
import { BookEditComponent } from "./book-edit/book-edit.component";

@NgModule({
  declarations: [
    BookComponent,
    BookListComponent,
    BookDetailsComponent,
    BookEditComponent
  ],
  imports: [CommonModule, BookRoutingModule, FormsModule]
})
export class BookModule {}
