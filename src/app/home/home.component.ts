import {Component, OnInit} from '@angular/core';
import {BioComponent} from '../components/bio/bio.component';
import {MeansOfPaiementComponent} from '../components/means-of-paiement/means-of-paiement.component';
import {PreferenceComponent} from '../components/preference/preference.component';
import {TestPipe} from '../test.pipe';
import {filter, interval, map, Observable, of, tap} from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [
    BioComponent,
    MeansOfPaiementComponent,
    PreferenceComponent,
    TestPipe
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  user = {firstName: 'Yvan', lastName: 'NGOUDJOU'}
  userInfos = {name: "Ornella KEUFACK", preference: ['Python', 'IA', 'DEVOPS', 'PO'],
    payment: ['Paylib', 'CHEQUES', 'VIREMENT'],
    description: "j'améliore mes compétences en Dev"};
  variableName = 'Angular';
  nameWithPromise = Promise.resolve(this.getName());

constructor() {
  // setTimeout(() => {
  //   this.getName()
  // }, 1000);
  console.log('handle new name With Promises..........')
  this.handleNameChangePromise();
}

ngOnInit() {
  console.log('handle new name with Observable..........');
  this.handleNameChangeObservable();

  of(1,2,3,4,5,6,7,8,9).pipe(
    map(x => {
      console.log(x * x);
      return x*x;
    }),
    tap(),
    map(y => {
      console.log(y * y * y);
      return y*y*y;
    }),
    filter(c => c%2 === 0)
  ).subscribe();
}

  generateName(): Observable<string> {
    return new Observable((observer) => {
       interval(1000).subscribe((i: number) => {
         let variableName = this.variableName + '-' + i
         observer.next(variableName);
       })
    })
  }

getName(): string {
return this.variableName;
}

handleNameChangePromise(){
    this.nameWithPromise.then(
      //success
      (name:string): void => {
      console.log(name);
      lambda(1,'');
      },
      //error
      (err): void => {
        console.log(err)
      }
    );
}

handleNameChangeObservable() {
  this.generateName().subscribe((name: string) => {
    //console.log(name)
  });
}

}

export const lambda = (a:number, b:string): boolean => {
    return b.length === a;
}
