import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewTestComponent } from './components/new-test-form/new-test-form.component';
import { testRoutes } from './test.routing';
import { TestService } from './test.service';
import { NewTestView } from './views/new-test-view/new-test.view';

@NgModule({
  declarations: [
    NewTestView,
    NewTestComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(testRoutes),
  ],
  providers: [TestService],
})
export class TestModule {}
