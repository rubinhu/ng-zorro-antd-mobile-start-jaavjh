import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "layout" },
  { path: "layout", component: LayoutComponent },
  { path: "**", redirectTo: "layout" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true /* The value shouble be false for IdentityServer */
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
