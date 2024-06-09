import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";

export interface KataHfrProviderInterface {
    getChaine: (chaine: number) => Observable<string>;
}

export const KATA_HFR_PROVIDER = new InjectionToken<KataHfrProviderInterface>('KATA_HFR_PROVIDER');