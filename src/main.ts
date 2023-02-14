import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `

    <div id="box" class="box"></div>
    <div id="box2" class="box">

  
</div>
  `,
})
export class App {
  name = 'Angular';

  ngAfterViewInit() {
    var box = document.getElementById('box');
    var box2 = document.getElementById('box2');

    document.onpointerdown = () => {
      console.log('test');
      box.style.height = '200px';
      document.onpointermove = () => {
        box.style.background = 'blue';
      };
    };

    document.ontouchstart = () => {
      console.log('test');
      box2.style.height = '200px';
      document.onpointermove = () => {
        box2.style.background = 'black';
      };
    };
  }
}

bootstrapApplication(App);
