import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="outerbox" id="outerbox">

  <div id="box2" class="box">

  </div>

  
</div>
  `,
})
export class App {
  name = 'Angular';

  ngAfterViewInit() {
    var box2 = document.getElementById('box2');
    var movey = document.getElementById('movey');

    box2.ontouchstart = () => {
      console.log('test');
      box2.style.height = '200px';
      document.onpointermove = (ev) => {
        box2.style.background = 'black';
        movey.innerHTML = ev.movementY + 'aa';
      };
    };
  }
}

bootstrapApplication(App);
