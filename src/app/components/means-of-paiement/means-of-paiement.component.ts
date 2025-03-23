import {Component, Input} from '@angular/core';
import {NgStyle} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-means-of-paiement',
  standalone: true,
  imports: [
    NgStyle,
    RouterLink
  ],
  templateUrl: './means-of-paiement.component.html',
  styleUrl: './means-of-paiement.component.scss'
})
export class MeansOfPaiementComponent {
  @Input() meansOfPayments: string[] = [];
}
