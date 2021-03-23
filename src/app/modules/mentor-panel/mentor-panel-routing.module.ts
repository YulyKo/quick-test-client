import { NgModule } from '@angular/core';
import { MentorGuard } from 'src/app/guards/mentor.guard';
import { RouterModule, Routes } from '@angular/router';
import { MentorPanelViewsComponent } from 'src/app/views/mentor-panel-views/mentor-panel-views.component';

const routes: Routes = [
  {
    path: 'home',
    component: MentorPanelViewsComponent,
    canActivate: [MentorGuard],
    // outlet: 'mentor',
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentorPanelRoutingModule { }

// the mentor-panel.roiuting.ts did not worked correctly with export routes, so now it's module
