import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "title-box",
  templateUrl: "./title-box.component.html",
  styleUrls: ["./title-box.component.scss"]
})
export class TitleBoxComponent implements OnInit {
  @Input() headerTitle: string;
  @Output() titleClicked = new EventEmitter<string>();
  constructor() {}

  send() {
    this.titleClicked.emit(`Hier kommt ein event: ${this.headerTitle}`);
  }

  ngOnInit() {}
}
