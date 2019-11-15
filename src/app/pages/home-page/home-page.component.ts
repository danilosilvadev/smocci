import { Component, OnInit } from "@angular/core";
import { comicItem } from "../../models/comicItem.model";
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
  username: string;

  ngOnInit() {}
}
