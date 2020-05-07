import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'potfolio';
  @HostListener("window:scroll", [])
  onWindowScroll($event) {
    // const offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
   console.log(window.pageYOffset,"event");
  }
}
