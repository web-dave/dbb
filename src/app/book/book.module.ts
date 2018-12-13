import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { BookRoutingModule } from "./book-routing.module";
import { BookComponent } from "./book/book.component";
import { BookListComponent } from "./book-list/book-list.component";
import { BookDetailsComponent } from "./book-details/book-details.component";
import { BookEditComponent } from "./book-edit/book-edit.component";
import { BookNewComponent } from "./book-new/book-new.component";
import { PipePipe } from './shared/pipe.pipe';
import { ShoutPipe } from './shared/shout.pipe';

@NgModule({
  declarations: [
    BookComponent,
    BookListComponent,
    BookDetailsComponent,
    BookEditComponent,
    BookNewComponent,
    PipePipe,
    ShoutPipe
  ],
  imports: [CommonModule, BookRoutingModule, FormsModule, ReactiveFormsModule]
})
export class BookModule {}
