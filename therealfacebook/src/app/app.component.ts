import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ElfelejtettComponent } from './elfelejtett/elfelejtett.component';
import { JelszoEmlekeztetoComponent } from './jelszo-emlekezteto/jelszo-emlekezteto.component';
import { JelszoComponent } from './jelszo/jelszo.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    JelszoComponent,
    NgIf,
    ElfelejtettComponent,
    JelszoEmlekeztetoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true, // 🔥 Add this line
})
export class AppComponent {
  title = 'therealfacebook';
  forgotpass = false;

  btnclick(event: Event) {
    event.preventDefault(); // 🔥 Stop the default link behavior
    this.forgotpass = !this.forgotpass; // Toggle the state
  }
}
