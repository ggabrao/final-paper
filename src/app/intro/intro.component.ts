import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
  fullText = 'Hi, I am Gabriel Abrão';
  displayedText = '';
  private typingSpeed = 100;
  private erasingSpeed = 50;
  private delayBetween = 1500;
  private isErasing = false;
  private charIndex = 0;
  private intervalId: any;

  ngOnInit() {
    this.startTyping();
  }

  ngOnDestroy() {
    clearTimeout(this.intervalId);
  }

  startTyping() {
    if (!this.isErasing && this.charIndex < this.fullText.length) {
      this.displayedText += this.fullText.charAt(this.charIndex);
      this.charIndex++;
      this.intervalId = setTimeout(() => this.startTyping(), this.typingSpeed);
    } else if (!this.isErasing && this.charIndex === this.fullText.length) {
      this.isErasing = true;
      this.intervalId = setTimeout(() => this.startTyping(), this.delayBetween);
    } else if (this.isErasing && this.charIndex > 0) {
      this.displayedText = this.fullText.substring(0, this.charIndex - 1);
      this.charIndex--;
      this.intervalId = setTimeout(() => this.startTyping(), this.erasingSpeed);
    } else {
      this.isErasing = false;
      this.intervalId = setTimeout(() => this.startTyping(), this.typingSpeed);
    }
  }
}

