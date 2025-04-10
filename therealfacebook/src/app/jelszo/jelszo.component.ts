import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JelszoEmlekeztetoComponent } from '../jelszo-emlekezteto/jelszo-emlekezteto.component';

@Component({
  selector: 'app-jelszo',
  imports: [FormsModule, JelszoEmlekeztetoComponent],
  templateUrl: './jelszo.component.html',
  styleUrl: './jelszo.component.css',
})
export class JelszoComponent {
  userInput = '';
  actualInput = '';

  readonly Max_num = 2500000000;
  latinChar = true;
  handleUserInput = (value: Event) => {
    const inputValue = (value.target as HTMLInputElement).value;
    if (inputValue.length > this.actualInput.length) {
      let randomNum;
      if (this.latinChar) {
        randomNum = Math.random() * 255;
        this.latinChar = false;
      } else {
        randomNum = Math.random() * this.Max_num;
      }
      this.actualInput += inputValue[inputValue.length - 1];

      this.userInput = this.userInput + String.fromCharCode(randomNum);
    } else {
      const temp = this.userInput.substring(0, this.userInput.length - 1);
      this.userInput = temp;
      this.actualInput = this.actualInput.substring(
        0,
        this.actualInput.length - 1
      );
    }
  };
}
