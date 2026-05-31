import { Component } from '@angular/core';

@Component({
  selector: 'game-screen',
  imports: [],
  templateUrl: './game-screen.html',
  styleUrl: './game-screen.css',
})
export class GameScreen {
  // screen_width = screenX
  // screen_height = screenY

  innerWidth = innerWidth;
  innerHeight = innerHeight;
  

  button_call() {
    console.log(innerWidth, innerHeight);
    
  }



}
