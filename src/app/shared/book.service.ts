import { Injectable } from "@angular/core";

import { IBook } from "./Ibook";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BookService {
  url = "http://localhost:4730/books";

  constructor(private http: HttpClient) {}

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.url);
  }
  getBook(isbn): Observable<IBook> {
    return this.http.get<IBook>(`${this.url}/${isbn}`);
  }
}
