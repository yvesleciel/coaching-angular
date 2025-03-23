import { Component } from '@angular/core';
import {NavBarComponent} from '../nav-bar/nav-bar.component';
import {RouterOutlet} from '@angular/router';
import {SideBarComponent} from '../side-bar/side-bar.component';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-professor-space',
  standalone: true,
  imports: [
    NavBarComponent,
    RouterOutlet,
    SideBarComponent,
    FooterComponent
  ],
  templateUrl: './professor-space.component.html',
  styleUrl: './professor-space.component.scss'
})
export class ProfessorSpaceComponent {

}
