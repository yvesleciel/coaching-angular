import { ResolveFn } from '@angular/router';

export const meanOfPaiementResolver: ResolveFn<Record<string, any>> = (route, state): Record<string, any> => {
  const code = route.paramMap.get('code');
  return {name: 'Paylib', code: code};
};
