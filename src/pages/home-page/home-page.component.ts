import { Component, OnInit } from "@angular/core";
import { comicItem } from "src/models/comicItem";
import list from "./mock.json";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"]
})
export class HomePageComponent implements OnInit {
  constructor() {}
  title = "json-file-read-angular";
  public comicsList: comicItem[] = list;

  ngOnInit() {}
}
