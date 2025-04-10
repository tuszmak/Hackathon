import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-jelszo',
  imports: [FormsModule],
  templateUrl: './jelszo.component.html',
  styleUrl: './jelszo.component.css',
})
export class JelszoComponent {
  userInput = '';
  actualInput = '';

  // readonly Max_num = 2500000000;
  readonly Max_num = 255;
  latinChar = true;
  handleUserInput = (value: Event) => {
    const inputValue = (value.target as HTMLInputElement).value;
    if (inputValue.length > this.actualInput.length) {
      const randomNum = Math.random() * this.Max_num;
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
