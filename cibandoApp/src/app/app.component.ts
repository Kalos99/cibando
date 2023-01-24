import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cibandoApp';
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
