import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from "rxjs/operators";
import { ThumbUploadService } from "../fileUploads/thumb-upload.service";
import { comicItem } from "src/app/models/comicItem.model";

@Injectable({
  providedIn: "root"
})
export class AuthorComicsService {
  constructor(
    private db: AngularFirestore,
    private thumbUploadService: ThumbUploadService
  ) {}

  get authorComics() {
    return this.db
      .collection("author-comics")
      .snapshotChanges()
      .pipe(
        map(res => {
          return res.map(data => ({
            id: data.payload.doc.id,
            ...data.payload.doc.data()
          }));
        })
      );
  }
  addComic(comic: comicItem) {
    this.db.collection("author-comics").add(comic);
  }

  deleteComic(id: string) {
    this.db.doc(`author-comics/'${id}`).delete();
  }
}
