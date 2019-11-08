import { Component, Input, OnInit } from "@angular/core";
import { comicItem } from "../../models/comicItem";

@Component({
  selector: "app-comics-list",
  templateUrl: "./comics-list.component.html",
  styleUrls: ["./comics-list.component.css"]
})
export class ComicsListComponent implements OnInit {
  @Input("comicsList") comicsList: comicItem[];

  constructor() {}
  title = "json-file-read-angular";

  ngOnInit() {
    console.log(this.comicsList, "lista");
  }
}
