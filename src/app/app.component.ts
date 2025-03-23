import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from '@angular/common';
import {BioComponent} from './components/bio/bio.component';
import {MeansOfPaiementComponent} from './components/means-of-paiement/means-of-paiement.component';
import {PreferenceComponent} from './components/preference/preference.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, BioComponent, MeansOfPaiementComponent, PreferenceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit, AfterViewChecked, AfterContentInit{
  ngAfterContentInit(): void {
  }

  ngAfterViewChecked(): void {
  }

  ngAfterViewInit(): void {
    console.log('After views Init -----------------------------')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('On changes life cycle -----------------------')
  }

  ngOnDestroy(): void {
  }


  ngOnInit() {
    console.log('On Init Component ---------------')
  }

  sendOfferInNetwwork() {
    const peer = new RTCPeerConnection();

  }
}
