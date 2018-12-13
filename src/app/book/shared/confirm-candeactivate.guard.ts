import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanDeactivate
} from "@angular/router";
import { BookDetailsComponent } from "../book-details/book-details.component";

@Injectable({
  providedIn: "root"
})
export class ConfirmCandeactivateGuard
  implements CanDeactivate<BookDetailsComponent> {
  canDeactivate(
    component: BookDetailsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean {
    return true; // confirm("Are you sure?");
  }
}
