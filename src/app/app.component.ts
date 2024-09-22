import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ],
  template:`
        <div>hiii{{1 +1}}</div>
  `
})
export class AppComponent {
  title = 'netflix-clone';
}
