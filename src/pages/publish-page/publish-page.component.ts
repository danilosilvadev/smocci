import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { SlideInOutAnimation } from "../../utils/animations/slide";

@Component({
  selector: "app-publish-page",
  templateUrl: "./publish-page.component.html",
  styleUrls: ["./publish-page.component.scss"],
  animations: [SlideInOutAnimation]
})
export class PublishPageComponent implements OnInit {
  isHovered: number;
  animationState = "out";

  constructor() {}

  toggleCreateComic(el: HTMLElement) {
    el.scrollIntoView();
    this.animationState = this.animationState === "out" ? "in" : "out";
  }

  mouseEnter(id: number) {
    this.isHovered = id;
  }

  mouseLeave() {
    this.isHovered = 0;
  }

  ngOnInit() {}
}
