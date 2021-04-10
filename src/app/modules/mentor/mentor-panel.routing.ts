import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FolderView } from './folders/views/folder-view/folder.view';
import { MentorView } from './mentor-view/mentor.view';
import { MentorGuard } from './mentor.guard';

export const mentorRoutes: Routes = [
  {
    path: 'home',
    component: MentorView,
    children: [
      {
        path: '',
        outlet: 'mentor',
        component: FolderView,
        canActivate: [MentorGuard],
      },
    ],
  },
];
