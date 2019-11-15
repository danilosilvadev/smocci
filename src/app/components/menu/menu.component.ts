import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
} from "@angular/core";
import { AppDataService } from "../../services/appdata/app-data.service";
import { fromEvent } from "rxjs";
import { appdataModel } from "../../models/appdata.model";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit, AfterViewInit {
  @ViewChild("google", { static: false }) google: ElementRef;
  activeDropdown = false;
  username: string;
  changeButtonObs$: any;

  constructor(private AppDataService: AppDataService) {
    /*
    AppDataService.appdata$.subscribe(data => {
      this.username = data.name;
    });
    */
  }

  ngOnInit() {
    /*
    this.AppDataService.appdataUsingHTTP.subscribe((data: any) => {
      this.username = data.username;
    });
    */
    this.AppDataService.appdata.subscribe((data: appdataModel[]) => {
      console.log(data, "resposta");
      this.username = data[0].username;
    });
  }

  ngAfterViewInit() {
    this.changeButtonObs$ = fromEvent(
      this.google.nativeElement,
      "click"
    ).subscribe(res => {
      this.AppDataService.appdata.subscribe(res => {
        console.log(res, "resposta");
      });
      /*
      this.AppDataService.appdataUsingHTTP.subscribe(res => {
        console.log("usando HTTP", res);
      });
      */
    });
  }
}
