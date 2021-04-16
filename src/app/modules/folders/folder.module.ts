import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuestionModule } from '../questions/question.module';
import { FolderItemsListComponent } from './components/folder-items-list/folder-items-list.component';
import { folderRoutes } from './folder.routing';
import { FolderView } from './views/folder-view/folder.view';

@NgModule({
  declarations: [
    FolderItemsListComponent,
    FolderView,
  ],
  imports: [
    QuestionModule,
    RouterModule,
    RouterModule.forChild(folderRoutes),
  ],
})
export class FolderModule {}
