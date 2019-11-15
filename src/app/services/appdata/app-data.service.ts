import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { appdataModel } from "../../models/appdata.model";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AppDataService {
  appdataCollection: AngularFirestoreCollection<appdataModel>;
  appdata$: Observable<appdataModel>;

  constructor(private db: AngularFirestore, private http: HttpClient) {
    this.appdata$ = of({ username: "Dani" });
  }

  get appdata() {
    this.appdataCollection = this.db.collection("appdata");
    return this.appdataCollection.snapshotChanges().pipe(
      map(res => {
        return res.map(data => ({
          id: data.payload.doc.id,
          ...data.payload.doc.data()
        }));
      })
    );
  }
  /*
  get appdataUsingHTTP() {
     return this.http.get("api/appdata");
  }
  */
}
