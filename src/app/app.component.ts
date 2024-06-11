import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Digikaz';
  isHomeLoading: boolean = true;


  ngOnInit(): void {
    setTimeout(() => {
      this.isHomeLoading = false;
    }, 100);
  }
}
