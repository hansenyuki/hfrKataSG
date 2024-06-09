import { RouterModule, Routes } from "@angular/router";
import { KataHfrComponent } from "./components/kata-component/kata-hfr.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: '',
        component: KataHfrComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class KataHfrRoutingModule {}