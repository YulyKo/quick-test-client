import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuestionModule } from '../questions/question.module';
import { FolderFilesListComponent } from './components/folder-items-list/folder-files-list.component';
import { FolderFileComponent } from './components/folder-items-list/folder-files/folder-file.component';
import { folderRoutes } from './folder.routing';
import { FolderService } from './folder.service';
import { FolderView } from './views/folder-view/folder.view';

@NgModule({
  declarations: [
    FolderView,
    FolderFileComponent,
    FolderFilesListComponent,
  ],
  imports: [
    CommonModule,
    QuestionModule,
    RouterModule,
    RouterModule.forChild(folderRoutes),
  ],
  providers: [FolderService],
})
export class FolderModule {}
