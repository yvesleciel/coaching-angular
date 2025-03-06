import {Component, Input} from '@angular/core';
import {DescriptionComponent} from '../../description/description.component';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-preference',
  standalone: true,
  imports: [
    DescriptionComponent,
    NgClass
  ],
  templateUrl: './preference.component.html',
  styleUrl: './preference.component.scss'
})
export class PreferenceComponent {
  @Input() preference: string[] = [];
  @Input() description = '';
}
