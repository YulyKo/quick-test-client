import { NgModule } from '@angular/core';
import { MentorGuard } from 'src/app/guards/mentor.guard';
import { HomeViewComponent } from 'src/app/views/mentor-panel-views/home/home-view.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomeViewComponent,
    canActivate: [MentorGuard],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }

// the mentor-panel.roiuting.ts did not worked correctly with export routes, so now it's module
