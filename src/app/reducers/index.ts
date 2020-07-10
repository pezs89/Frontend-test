import { InjectionToken } from '@angular/core';
import { MetaReducer, Action, ActionReducerMap } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { environment } from '../../environments/environment';

export interface State {
  router: fromRouter.RouterReducerState<fromRouter.BaseRouterStoreState>;
}

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>('Root reducers token', {
  factory: () => ({
    router: fromRouter.routerReducer,
  }),
});

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
