import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import list from "./mock.json";
import { FormGroup, FormControl, Validators } from "@angular/forms";

interface comic {
  name: string;
  description: string;
  category: string;
  cover: string;
  termCheckbox: boolean;
}

@Component({
  selector: "app-create-comic",
  templateUrl: "./create-comic.component.html",
  styleUrls: ["./create-comic.component.scss"]
})
export class CreateComicComponent implements OnInit {
  comicTypes: { name: string }[];
  createComicForm: FormGroup;
  fileName = "Nome do arquivo";

  @Output() newComicEvent = new EventEmitter<{ thumb: File; name: number }>();

  constructor() {
    this.comicTypes = list;
  }

  ngOnInit() {
    this.createComicForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(3)]),
      description: new FormControl("", [
        Validators.required,
        Validators.minLength(10)
      ]),
      category: new FormControl("", [Validators.required]),
      termCheckbox: new FormControl("", [Validators.required]),
      cover: new FormControl("", [Validators.required])
    });
  }

  onFileSelected(event) {
    this.fileName = event.target.files[0].name;
    if (event.target.files && event.target.files.length) {
      let me = this;
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        me.createComicForm.patchValue({
          cover: reader.result
        });
      };
      reader.onerror = error => {
        console.error("Error: ", error);
      };
    }
  }

  onSubmit() {
    this.newComicEvent.emit({
      thumb: this.createComicForm.get("cover").value,
      name: this.createComicForm.get("name").value
    });
    this.createComicForm.reset();
    this.fileName = "Nome do arquivo";
  }
}
