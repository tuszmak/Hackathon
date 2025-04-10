import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jelszo-emlekezteto',
  imports: [CommonModule],
  templateUrl: './jelszo-emlekezteto.component.html',
  styleUrl: './jelszo-emlekezteto.component.css',
})
export class JelszoEmlekeztetoComponent implements OnInit {
  ngOnInit(): void {
    this.questionList = funkyQuestions.slice(0, this.questionCount);
  }
  @Input() questionCount!: number;

  questionList: string[] = [];
}

const funkyQuestions = [
  'If your favorite emoji had access to your browser history, what would it say about you?',
  'What’s the weirdest name you’ve ever given to a Wi-Fi network or Bluetooth device?',
  'If your Spotify playlist could leak one embarrassing song you secretly love, which one would it be?',
  'If your phone autocorrect had a personality, how would it describe your texting habits?',
  'What’s the most bizarre password you’ve ever created (without revealing the actual password, of course)?',
  'If your search history could talk, what would it roast you for the most?',
  "What’s the strangest contact name you’ve saved in your phone? (e.g., 'Pizza Wizard' or 'Don’t Answer #3'?)",
  'If your email inbox was a person, how stressed out would they be right now?',
  'What’s the most random app you’ve downloaded but never used?',
  'If your phone’s screen time report was a movie, what genre would it be? (Comedy? Horror? Documentary?)',
  'If your selfie folder had its own theme song, what would it be called?',
  'What’s the most cryptic note you’ve ever written in your Notes app that even *you* don’t understand anymore?',
  'If your GPS could judge you for one specific trip, which one would it be and why?',
  'If your online shopping cart could reveal one item you keep adding but never buy, what would it be?',
  'What’s the funniest typo you’ve ever sent that completely changed the meaning of a message?',
  'If your phone wallpaper could reveal one secret about you, what would it spill?',
  'What’s the most ridiculous username you’ve ever created for an online account?',
  'If your social media DMs could form a band, what would their name be based on their content?',
  'What’s the oddest thing you’ve ever Googled at 3 AM that made perfect sense at the time?',
  'If your digital life was turned into a reality show, what would be its title?',
];
