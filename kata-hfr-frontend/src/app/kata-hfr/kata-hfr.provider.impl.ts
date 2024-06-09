import { Injectable } from "@angular/core";
import { KataHfrProviderInterface } from "./kata-hfr.provider.interface";
import { Actions, Store, ofActionDispatched } from "@ngxs/store";
import { GetChaineRequest, GetChaineSuccess } from "./kata-hfr.actions";
import { Observable, map } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class KataHfrProviderImpl implements KataHfrProviderInterface {

    constructor(private readonly store: Store, private readonly actions$: Actions) { }

    getChaine(chaine: number): Observable<string> {
        this.store.dispatch(new GetChaineRequest(chaine));
        return this.actions$.pipe(ofActionDispatched(GetChaineSuccess), map(action => action?.response));
    }

}