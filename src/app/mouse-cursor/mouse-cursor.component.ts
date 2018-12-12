import { Component, OnInit } from "@angular/core";

@Component({
  selector: "mouse-cursor",
  templateUrl: "./mouse-cursor.component.html",
  styleUrls: ["./mouse-cursor.component.scss"]
})
export class MouseCursorComponent implements OnInit {
  x: number = 0;
  y: number = 0;

  constructor() {}

  action(e) {
    this.x = e.screenX;
    this.y = e.screenY;
  }
  ngOnInit() {}
}
