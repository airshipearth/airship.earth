import { Component } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private email: string;

  constructor(private db: AngularFireDatabase) { }

  onSubmit() {
    this.db.list('/subscriptions').push({
      date: (new Date()).toISOString(),
      email: this.email,
    }).then((result) => {
      delete this.email;
    }, (error) => {});
  }
}
