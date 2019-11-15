import {
  Component,
  OnInit,
  OnDestroy,
  HostListener,
  ViewChild,
  Renderer2,
  ElementRef
} from "@angular/core";
import { SlideInOutAnimation } from "../../utils/animations/slide";
import { Subject } from "rxjs";
import { AuthorComicsService } from "../../services/authorComic/author-comics.service";

interface Comic {
  name: string;
  thumb: string;
  id: string;
}

@Component({
  selector: "app-publish-page",
  templateUrl: "./publish-page.component.html",
  styleUrls: ["./publish-page.component.scss"],
  animations: [SlideInOutAnimation]
})
export class PublishPageComponent implements OnInit, OnDestroy {
  isHovered = false;
  animationState = "out";
  comicsList: Comic[];
  comicListObservable = new Subject<Comic[]>();
  isModalActive = false;
  comicId: string;

  @ViewChild("overlayButton", { static: false }) overlayButton: ElementRef;

  constructor(
    private authorComicsService: AuthorComicsService,
    private _el: ElementRef
  ) {}

  handleEdit(id) {
    this.isModalActive = true;
    this.comicId = id;
    console.log(this.isModalActive, "ta mudando algo?");
  }

  @HostListener("mouseenter") onMouseEnter() {
    this.isHovered = true;
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.isHovered = false;
  }

  toggleCreateComic(el: HTMLElement) {
    el.scrollIntoView();
    this.animationState = this.animationState === "out" ? "in" : "out";
  }

  addComic($event) {
    this.authorComicsService.addComic($event);
    // this.comicListObservable.next([...this.comicsList, $event])
  }

  toggleModal() {
    this.isModalActive = false;
  }

  deleteComic($event) {
    console.log($event, "o id ta aqui?");
    // this.authorComicsService.deleteComic($event);
  }

  ngOnInit() {
    console.log(this.isHovered, "fora do caminho");
    this.authorComicsService.authorComics.subscribe((data: Comic[]) => {
      this.comicListObservable.next(data);
    });
    this.comicListObservable.subscribe(data => {
      this.comicsList = data;
    });
  }

  ngOnDestroy() {
    this.comicListObservable.unsubscribe();
  }
}
