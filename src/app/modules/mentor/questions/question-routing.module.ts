import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FolderView } from '../folders/views/folder-view/folder.view';
import { MentorGuard } from '../mentor.guard';
import { CreatingQuestionView } from './views/creating-question-view/creating-question.view';

const routes: Routes = [
  {
    path: 'home/root',
    canActivate: [MentorGuard],
    component: FolderView,
    children: [],
  },
  {
    path: 'home/new-question',
    component: CreatingQuestionView,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentorPanelRoutingModule { }

// the mentor-panel.roiuting.ts did not worked correctly with export routes, so now it's module
