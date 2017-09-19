import { MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../../environments/environment';

export const metaReducers: MetaReducer<{}>[] =
  !environment.production
    ? [storeFreeze]
    : [];
