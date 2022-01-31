import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { TtsComponent } from "./tts/tts.component";

const routes: Routes = [
  { path: "", redirectTo: "/tts", pathMatch: "full" },
  { path: "tts", component: TtsComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
