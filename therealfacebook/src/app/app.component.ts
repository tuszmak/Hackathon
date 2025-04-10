import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JelszoComponent } from './jelszo/jelszo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JelszoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'therealfacebook';
}
