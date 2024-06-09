import { NgModule } from "@angular/core";
import { KataHfrComponent } from "./components/kata-component/kata-hfr.component";
import { KATA_HFR_PROVIDER } from "./kata-hfr.provider.interface";
import { KataHfrProviderImpl } from "./kata-hfr.provider.impl";
import { KataHfrRoutingModule } from "./kata-hfr-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [KataHfrRoutingModule, FormsModule, ReactiveFormsModule, CommonModule],
    declarations: [KataHfrComponent],
    providers: [{
        provide: KATA_HFR_PROVIDER,
        useClass: KataHfrProviderImpl
    }]
})

export class KataHfrModule {}