import { Injectable } from "@angular/core";
import { AngularFireStorage } from "@angular/fire/storage";

@Injectable({
  providedIn: "root"
})
export class ThumbUploadService {
  constructor(private storage: AngularFireStorage) {}

  uploadThumb({ event, name }) {
    const file = event.target.files[0];
    const filePath = `/covers/${new Date().getTime()}_${name}`;
    const ref = this.storage.ref(filePath);
    const task = ref.put(file);
    return task.snapshotChanges();
  }
}
