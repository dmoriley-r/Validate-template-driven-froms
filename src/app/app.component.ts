import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  formData: any;

  handleSubmit(e: FormData) {
    this.formData = { ...e };
  }
}
