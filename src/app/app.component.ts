import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private email: string;

  onSubmit() {
    console.log(`Signup for: ${this.email}`);
    delete this.email;
  }
}
