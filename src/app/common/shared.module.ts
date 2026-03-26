import { NgModule } from "@angular/core";
import { Card } from "./card/card";
import { Header } from "./header/header";


@NgModule({
    declarations: [Card, Header],
    exports: [Card, Header]
})
export class SharedModule {

}
