import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  marks=52;

  emp=[
    {"name":"akul","age":"42","city":"gzb"},
    {"name":"amit","age":"44","city":"lko"},
    {"name":"atul","age":"43","city":"knp"}
  ];
}
