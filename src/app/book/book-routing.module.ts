import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BookComponent } from "./book/book.component";
import { BookListComponent } from "./book-list/book-list.component";
import { BookDetailsComponent } from "./book-details/book-details.component";
import { ConfirmCandeactivateGuard } from "./shared/confirm-candeactivate.guard";
import { BookEditComponent } from "./book-edit/book-edit.component";

const routes: Routes = [
  {
    path: "",
    component: BookComponent,
    children: [
      {
        component: BookListComponent,
        path: ""
      },
      {
        component: BookDetailsComponent,
        path: ":isbn",
        canDeactivate: [ConfirmCandeactivateGuard]
      },
      {
        component: BookEditComponent,
        path: ":isbn/edit"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule {}
