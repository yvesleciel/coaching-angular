import {Component, computed, input, Input, InputSignal, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-mean-of-paiement-detail',
  standalone: true,
  imports: [],
  templateUrl: './mean-of-paiement-detail.component.html',
  styleUrl: './mean-of-paiement-detail.component.scss'
})
export class MeanOfPaiementDetailComponent implements OnChanges{

  //@Input() code = '';
  @Input() paiement!: Record<string, any>
  code: InputSignal<string> = input<string>('')

  @Input() data!: Record<string, any>

  computedCode = computed(() => console.log('code from signal', this.code()));

// quand on a déjà un input signal plus besoin de ngOnchanges
  ngOnChanges(changes: SimpleChanges) {
    console.log('Objet paiement with change', this.paiement);
    console.log('Objet data with change', this.data);
  }

}
