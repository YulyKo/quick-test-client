import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { testRoutes } from './test.routing';
import { TestService } from './test.service';
import { NewTestView } from './views/new-test-view/newTest.view';

@NgModule({
  declarations: [
    NewTestView,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(testRoutes),
  ],
  providers: [TestService],
})
export class TestModule {}
