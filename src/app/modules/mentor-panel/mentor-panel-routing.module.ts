import { NgModule } from '@angular/core';
import { MentorGuard } from 'src/app/guards/mentor.guard';
import { RouterModule, Routes } from '@angular/router';
import { FolderViewComponent } from 'src/app/views/mentor-panel/folder-view/folder-view.component';
import { CreatingTestViewComponent } from 'src/app/views/mentor-panel/creating-test-view/creating-test-view.component';

const routes: Routes = [
  {
    path: 'home/root',
    canActivate: [MentorGuard],
    component: FolderViewComponent,
    children: [],
  },
  {
    path: 'home/new-question',
    component: CreatingTestViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentorPanelRoutingModule { }

// the mentor-panel.roiuting.ts did not worked correctly with export routes, so now it's module
