import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable()
export class BioService {

  constructor() { }

  getProfile(id: string): Observable<Record<string, any>> {
    console.log('profile from Bio Service')
    return of({name: 'Yvan', age: 21});
  }
}
