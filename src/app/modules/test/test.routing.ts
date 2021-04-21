import { Routes } from "@angular/router";
import { NewTestView } from "./views/new-test-view/newTest.view";

export const testRoutes: Routes = [
  {
    path: 'test',
    children: [
      {
        path: 'new',
        component: NewTestView,
      },
    ],
  }
];
