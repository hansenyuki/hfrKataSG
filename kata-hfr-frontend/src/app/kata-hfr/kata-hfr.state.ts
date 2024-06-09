import { Action, Selector, State, StateContext } from "@ngxs/store";
import { KataHfrModelState } from "./kata-hfr.model";
import { Injectable } from "@angular/core";
import { GetChaineRequest, GetChaineSuccess } from "./kata-hfr.actions";
import { map } from "rxjs/operators";
import { KataHfrService } from "./kata-hfr.service";

const KATA_HFR_INITIAL_STATE = {
    value: '',
    pending: true
};

@State<KataHfrModelState>({
    name: 'KataHfrState',
    defaults: KATA_HFR_INITIAL_STATE,
})
@Injectable()
export class KataHfrState {
    constructor(private readonly kataHfrService: KataHfrService) {}

    @Selector()
    static KataHfrState(state: KataHfrModelState): KataHfrModelState {
        return state;
    }

    @Selector()
    static loading(state: KataHfrModelState): boolean {
        return state.pending;
    }

    @Selector()
    static chaine(state: KataHfrModelState): string {
        return state.value;
    }

    @Action(GetChaineRequest)
    getChaineRequest({ dispatch }: StateContext<KataHfrModelState>, { payload }: GetChaineRequest) {
        return this.kataHfrService.getChaine(payload).pipe(map(resp => dispatch(new GetChaineSuccess(resp))));
    }

    @Action(GetChaineSuccess)
    getChaineSuccess({ patchState }: StateContext<KataHfrModelState>, { response }: GetChaineSuccess) {
        patchState({
            value: response,
            pending: false
        })
    }
}