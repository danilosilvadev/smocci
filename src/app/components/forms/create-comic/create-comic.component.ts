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

  @Output() newComicEvent = new EventEmitter<{ image: string; id: number }>();

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
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = () => {
        this.createComicForm.patchValue({
          cover: reader.result
        });
      };
    }
  }

  onSubmit() {
    console.log(this.createComicForm.get("cover").value, "new comic added");
    this.newComicEvent.emit({
      image: this.createComicForm.get("cover").value,
      id: Math.random()
    });
    this.createComicForm.reset();
    this.fileName = "Nome do arquivo";
  }
}
