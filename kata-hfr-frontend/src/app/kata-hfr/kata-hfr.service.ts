import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import build from "@googlicius/build-url"
import { map } from "rxjs";
import { ChaineModel } from "./kata-hfr.model";

@Injectable({
    providedIn: 'root',
})
export class KataHfrService {
    constructor(private readonly http: HttpClient) {}

    getChaine(chaine: number) {
        let url = build('http://localhost:8080/kataHfr/getChaine', {queryParams : {chaine:chaine}})

        return this.http.get<ChaineModel>(url).pipe(map(r => r.chaine));
    }
}