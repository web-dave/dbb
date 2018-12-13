import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { InfoBoxComponent } from "./info-box/info-box.component";
import { MouseCursorComponent } from "./mouse-cursor/mouse-cursor.component";
import { TitleBoxComponent } from "./title-box/title-box.component";
import { BookListComponent } from "./book-list/book-list.component";
import { AppRoutingModule } from "./app-routing.module";
import { BookDetailsComponent } from "./book-details/book-details.component";

@NgModule({
  declarations: [
    AppComponent,
    InfoBoxComponent,
    MouseCursorComponent,
    TitleBoxComponent,
    BookListComponent,
    BookDetailsComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
