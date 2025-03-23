import {Component, inject, Input, OnInit} from '@angular/core';
import {DescriptionComponent} from '../description/description.component';
import {NgClass} from '@angular/common';
import {BioService} from '../../services/bio.service';
import {BetterBioService} from '../../services/better-bio.service';
import {BioComponent} from '../bio/bio.component';

@Component({
  selector: 'app-preference',
  standalone: true,
  imports: [
    DescriptionComponent,
    NgClass
  ],
  providers: [BetterBioService, {provide: BioService, useExisting: BetterBioService}],
  templateUrl: './preference.component.html',
  styleUrl: './preference.component.scss'
})
export class PreferenceComponent implements OnInit{
  @Input() preference: string[] = [];
  @Input() description = '';
  bio = inject(BioService)

  ngOnInit() {
    console.log('preference component ----');
    this.bio.getProfile("").subscribe();
    console.log('end pref -----')
  }
}
