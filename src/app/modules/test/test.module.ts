import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UIModule } from '../UI/ui.module';
import { NewTestFormComponent } from './components/new-test-form/new-test-form.component';
import { testRoutes } from './test.routing';
import { TestService } from './test.service';
import { NewTestView } from './views/new-test-view/new-test.view';

@NgModule({
  declarations: [
    NewTestView,
    NewTestFormComponent,
  ],
  imports: [
    UIModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(testRoutes),
  ],
  providers: [TestService],
})
export class TestModule {}
