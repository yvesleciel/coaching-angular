import { Component } from '@angular/core';
import {interval} from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  message = "";
  constructor() {
    interval(1000).subscribe(x =>console.log(this.message));
    [].splice(1,1);
    [].slice();

  }
}
