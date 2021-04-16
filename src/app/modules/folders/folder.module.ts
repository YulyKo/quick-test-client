import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuestionModule } from '../questions/question.module';
import { FolderItemsListComponent } from './components/folder-items-list/folder-items-list.component';
import { folderRoutes } from './folder.routing';
import { FolderService } from './folder.service';
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
  providers: [FolderService],
})
export class FolderModule {}
