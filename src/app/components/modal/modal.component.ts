import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  SimpleChange,
  ChangeDetectionStrategy
} from "@angular/core";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent implements OnInit, OnChanges {
  modalStatus: boolean;
  @Input("isModalActive") isModalActive: boolean;
  @Input("comicId") comicId;
  @Output("toggleModal") toggleModalEmitter: EventEmitter<
    any
  > = new EventEmitter();
  @Input("deleteComic") deleteComic;

  constructor() {}

  closeModal() {
    this.toggleModalEmitter.emit(false);
  }

  handleDelete() {
    this.deleteComic(this.comicId);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes, "está escutando");
    //this.comicId = changes.comicId.currentValue;
    this.isModalActive = changes.isModalActive.currentValue;
  }

  ngOnInit() {
    console.log(this.isModalActive, "ativo mesmo?");
  }
}
