import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ElfelejtettComponent } from './elfelejtett/elfelejtett.component';
import { JelszoComponent } from './jelszo/jelszo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JelszoComponent, ElfelejtettComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'therealfacebook';
}
