import { Component,AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-sidebare',
  imports: [],
  templateUrl: './sidebare.html',
  styleUrl: './sidebare.css',
})
export class Sidebare {

isOpen = false;          // controls hamburger + overlay
wrapperToggled = false;  // controls the sidebar slide

  toggleMenu() {

    this.isOpen = !this.isOpen;
    this.wrapperToggled = !this.wrapperToggled;

  }
}


