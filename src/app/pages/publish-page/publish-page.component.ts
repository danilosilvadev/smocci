import { Component, OnInit, Directive } from "@angular/core";
import { SlideInOutAnimation } from "../../utils/animations/slide";
import list from "./mock.json";

@Component({
  selector: "app-publish-page",
  templateUrl: "./publish-page.component.html",
  styleUrls: ["./publish-page.component.scss"],
  animations: [SlideInOutAnimation]
})
export class PublishPageComponent implements OnInit {
  isHovered: number;
  animationState = "out";
  comicsList: { image: string; id: string }[];

  constructor() {
    this.comicsList = list;
  }

  handleEdit(id) {
    console.log(id, "aqui está o id");
  }

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

  addComic($event) {
    console.log($event, "ta chegando?");
    this.comicsList = [...this.comicsList, $event];
  }

  ngOnInit() {}
}
