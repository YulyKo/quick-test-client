import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { testRoutes } from "./tesr.routing";
import { TestService } from "./test.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(testRoutes),
  ],
  providers: [TestService],
})
export class TestModule {}
