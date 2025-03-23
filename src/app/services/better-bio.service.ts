import { Injectable } from '@angular/core';
import {BioService} from './bio.service';
import {Observable, of} from 'rxjs';

@Injectable()
export class BetterBioService extends BioService{

  constructor() {
    super();
  }

  override getProfile(id: string): Observable<Record<string, any>> {
    console.log('profile from Better Bio Service')
    return of({name: 'Vanesta', age: 18});
  }
}
