import {CanActivateFn, MaybeAsync} from '@angular/router';
import {of} from 'rxjs';

export const meanOfPaiementGuard: CanActivateFn = (route, state): MaybeAsync<boolean> => {
  let user = fetch('user');
  if(!user) {
    return false;
  } else {
    // canAccess = verifyAuthority(user);
    // if(canAccess) return true;
    return false;
    //return true;
  }
};
