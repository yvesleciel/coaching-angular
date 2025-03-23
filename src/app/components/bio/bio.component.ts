import {AfterViewInit, Component, inject, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {BioService} from '../../services/bio.service';
import {BetterBioService} from '../../services/better-bio.service';

@Component({
  selector: 'app-bio',
  standalone: true,
  imports: [],
  //providers: [{provide: BioService, useClass: BetterBioService}],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.scss'
})
export class BioComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit{
  @Input() name = '';

  //bioService = inject(BioService);


  ngOnInit() {
    console.log('On Init Component ---------------');
    //this.bioService.getProfile("1").subscribe();
  }

  ngAfterViewInit(): void {
    console.log('After views Init -----------------------------')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('On changes life cycle -----------------------')
  }

  ngOnDestroy(): void {
  }
}
