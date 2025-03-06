import {AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-bio',
  standalone: true,
  imports: [],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.scss'
})
export class BioComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit{
  @Input() name = '';


  ngOnInit() {
    console.log('On Init Component ---------------')
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
