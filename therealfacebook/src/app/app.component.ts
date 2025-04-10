import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JelszoComponent } from './jelszo/jelszo.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JelszoComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true, // 🔥 Add this line

})
export class AppComponent {
  title = 'therealfacebook';
  forgotpass = false

  btnclick(event: Event) {
    event.preventDefault(); // 🔥 Stop the default link behavior
    this.forgotpass = !this.forgotpass; // Toggle the state
  }
}
